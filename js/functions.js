$(function(){
    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider(){
        var amt  = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');        
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                
            }
        });
        
        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                
            }
        })
    }

    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color','transparent');
            $(this).css('background-color','#e40044');
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img);
        })
        $('.mini-img-wraper').eq(0).click();
    }

    //Sistema de click para ir para a div e contato com base no atributo GOTO.

    var directory = '';
    $('[goto=contato]').click(function(){
        location.href=directory+'index.html?contato';
        return false;
    })

    checkUrl();

    function checkUrl(){
        var url = location.href.split('/');
        var curPage = url[url.length-1].split('?');
        if(curPage[1] != undefined && curPage[1] == 'contato'){
            $('[goto=contato]').css('color','#e40044');
            $('html,body').animate({'scrollTop':$('#contato').offset().top});
        }else{
        }
    }

        //Menu Responsivo

    $('.mobile').click(function(){
        $(this).find('ul').slideToggle();

    })
})

class Validacao{
    constructor(){
        this.telefone;
    }

    validarFone(telefone){
        this.telefone = telefone.replace(/\D/g, "");
        if(!(this.telefone.length >= 10 && this.telefone.length <= 11)){
            return false;
        }
        if(parseInt(this.telefone.substring(0, 1)) == 0 || parseint(this.telefone.substring(1, 2)) == 0){
            return false;
        }
        if(this.telefone.length == 11 && parseInt(this.telefone.substring(2, 3)) != 9){
            return false;
        }
        if(this.telefone.length == 11 && [6, 7, 8, 9].indexOf(parseInt(this.telefone.substring(3, 4))) == -1){
            return false;
        }
        if(this.telefone.length == 10 && [2, 3, 4, 5].indexOf(parseInt(this.telefone.substring(2, 3))) == -1){
            return false;
        }
        return true;
    }
}

const selectorAll = document.querySelectorAll.bind(document);
const id = document.getElementById.bind(document);

function mascara(o, f){
    obj = o;
    fun = f;
    setTimeout("execmascara()", 1);
}

function execmascara(){
    obj.value = fun(obj.value);
}

function mtel(v){
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1)$2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

window.onload = () => {
    let numero = selectorAll('.telefone');
    for(let i = 0; i< numero.length; i++){
        numero[i].onkeyup = function(){
            mascara(this, mtel);
        };
    }
};