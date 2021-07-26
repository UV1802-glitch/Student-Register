name_array= [];

function submit()
{
    var name_1= document.getElementById("student_name_1").value;
    var name_2= document.getElementById("student_name_2").value;
    var name_3= document.getElementById("student_name_3").value;
    var name_4= document.getElementById("student_name_4").value;

    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);

    document.getElementById("label_array").innerHTML= name_array;
}



function sort()
{
    name_array.sort();
    document.getElementById("label_array").innerHTML= name_array;
}