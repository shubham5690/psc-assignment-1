document.getElementById('student_form').addEventListener('submit', store_data)

function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.img=i;
    this.batch=`web${b}`;
}

let data=JSON.parse(localStorage.getItem('students_data')) || []


function store_data(){
    event.preventDefault();
    // console.log('hello')
    let form=document.getElementById('student_form')

    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let img=form.image.value;
    let batch=form.batch.value;

    let s= new student(name,course,unit,img,batch)

    data.push(s);
    localStorage.setItem('students_data',JSON.stringify(data))

    location.reload(true)
    
    // console.log(data)

}

function calculate(){
    // let arr=[]
    let obj={};
    
    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }
    for(let i=0; i<data.length; i++){
        
            obj[data[i].batch]++;
        
    }
    console.log(obj)

    
    
    
    for(let key in obj)
    {
        let h2= document.createElement('h2');
        h2.innerText =`${key}: ${obj[key]}` ;

        document.getElementById('navbar').append(h2)
        
    
    }
    
    
    
}
calculate()