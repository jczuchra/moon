function showMe()
{
    const scrollPosition = window.scrollY;

    const articlePosition1 = document.querySelector('.art1').offsetTop;
    const articlePosition2 = document.querySelector('.art2').offsetTop;
    const articlePosition3 = document.querySelector('.art3').offsetTop;
    const articlePosition4 = document.querySelector('.art4').offsetTop;
    const articlePosition5 = document.querySelector('.op1').offsetTop;
    const articlePosition6 = document.querySelector('.op2').offsetTop;

    const articleHeight1 = document.querySelector('.art1').clientHeight;
    const articleHeight2 = document.querySelector('.art2').clientHeight;
    const articleHeight3 = document.querySelector('.art3').clientHeight;
    const articleHeight4 = document.querySelector('.art4').clientHeight;
    const articleHeight5 = document.querySelector('.op1').clientHeight;
    const articleHeight6 = document.querySelector('.op2').clientHeight;

    if(scrollPosition > articlePosition1 + articleHeight1 - window.outerHeight)
    {
        document.querySelector('.art1 h2').classList.add('active');
        document.querySelector('.art1 p').classList.add('active');
        document.querySelector('.art1 img').classList.add('active');
        console.log(articlePosition1);
    }

    if ( scrollPosition > articlePosition2 + articleHeight2 - window.outerHeight)
    {
        document.querySelector('.art2 h2').classList.add('active');
        document.querySelector('.art2 p').classList.add('active');
        document.querySelector('.art2 img').classList.add('active');
    }

    if ( scrollPosition > articlePosition3 + articleHeight3 - window.outerHeight)
    {
        document.querySelector('.art3 h2').classList.add('active');
        document.querySelector('.art3 p').classList.add('active');
        document.querySelector('.art3 img').classList.add('active');
    }

    if ( scrollPosition > articlePosition4 + articleHeight4 - window.outerHeight)
    {
        document.querySelector('.art4 h2').classList.add('active');
        document.querySelector('.art4 p').classList.add('active');
        document.querySelector('.art4 img').classList.add('active');
    }

    if ( scrollPosition > articlePosition5 + 0.5*articleHeight5 - window.outerHeight)
    {
        document.querySelector('.op1').classList.add('active');
    }

    if ( scrollPosition > articlePosition6 + 0.5 * articleHeight6 - window.outerHeight)
    {
        document.querySelector('.op2').classList.add('active');
    }



    if ( scrollPosition < 100)
    {
        let activeElements = document.querySelectorAll('.active');
        for(let i = 0 ; i < activeElements.length ; i++)
        {
            activeElements[i].classList.remove('active');
        }
    }
    
    
}
window.addEventListener('scroll',showMe);
