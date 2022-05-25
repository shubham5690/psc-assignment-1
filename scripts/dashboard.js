function append(){
    // console.log('append')
    let data=JSON.parse(localStorage.getItem('students_data')) || []
    
    document.getElementById('container').innerHTML=null;
    data.forEach(function(ele,index){
        // console.log(ele)
        let box=document.createElement('div');

        let img=document.createElement('img');
        img.src=ele.img;

        let name=document.createElement('p')
        name.innerText=ele.name;

        let course=document.createElement('p');
        course.innerText=ele.course;

        let unit=document.createElement('p');
        unit.innerText=ele.unit;

        let batch=document.createElement('p');
        batch.innerText=ele.batch

        let btn=document.createElement('button')
        btn.innerText='Remove'
        btn.addEventListener('click', function(){
            remove(index)
        })

        box.append(img,name,course,unit,batch,btn);
        document.getElementById('container').append(box)


    })
}
append()

function remove(index){
    let data=JSON.parse(localStorage.getItem('students_data')) || []

    let newdata=data.filter(function(ele,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem('trash')) || []
            trash.push(ele)
            localStorage.setItem('trash',JSON.stringify(trash))
        }else{
            return i !== index;
        }
        
    })
    localStorage.setItem('students',JSON.stringify(newdata))
    append()
    console.log(newdata)
}
//-----------------------------------------------------navbar----------------------------
// let data=JSON.parse(localStorage.getItem('students_data')) || []
// function calculate(){
//     // let arr=[]
//     let obj={};
    
//     for(let i=0; i<data.length; i++){
//         if(!obj[data[i].batch]){
//             obj[data[i].batch]=0;
//         }
//     }
//     for(let i=0; i<data.length; i++){
        
//             obj[data[i].batch]++;
        
//     }
//     console.log(obj)

    
    
    
//     for(let key in obj)
//     {
//         let h2= document.createElement('h2');
//         h2.innerText =`${key}: ${obj[key]}` ;

//         document.getElementById('navbar').append(h2)
        
    
//     }
    
    
    
// }
// calculate()