/**
 * Created by hp on 09.03.2017.
 */
do
{
    var firstName = prompt('Введите Ваше Имя');
}while (firstName==0);
do
{
var lastName=prompt('Введите Вашу Фамилию');
}while (lastName==0);
    do
    {
var secondName=prompt('Введите Ваше Отчество');
    }while (secondName==0);
var men,retired;
do {
    var years = (parseInt(prompt('Введите Ваш возраст')));
}while (isFinite(years)!=1);
    var  month;
if(!confirm('Ваш пол "Mуж"')==0)
{
    men='мужской';
}
else {
    men='женский';
}
month=360*years;
if(men=='женский'&&years<55)
{
    retired='нет';
}
if(men=='женский'&&years>=55) {
    retired='да';
}
if(men=='мужской'&&years<60)
{
    retired='нет';
}
if(men=='мужской'&&years>=60) {
    retired='да';
}

alert('Ваше ФИО: '+firstName+' '+lastName+' '+secondName+'\nВаш возраст в года: '+years+'\nВаш возраст в днях: '+month+ '\nВаш пол: '+men+'\nВы на пенсии: '+retired);