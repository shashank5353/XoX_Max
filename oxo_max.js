
let box_num=3;
let g_b_num=0;
let b_n=3;
let yes=0;
let yes_o=0;
  let yes_x=0;
let real_g_b_arr=[];
let arr_stages=[];
let main_arr_i=[];
let main_arr_j=[];
let g_b_event;
let game_over=false;


const trail=(arr,xo)=>{
  let trail_arr=[];
  for(let i=0;i<box_num;i++){
    trail_arr[i]=[];
  }
// console.log("trail()",trail_arr);
  let tu=0; 
  for(let i=0;i<box_num;i++){
    for(let j=0;j<box_num;j++){
      trail_arr[i][j]=arr[tu];
      tu++;
    }
  }
  const num_box=(box_num-2)*(box_num-2);
//  console.log(num_box);
  let a_i_s=[];
  let a_i_e=[];
  let a_j_s=[];
  let a_j_e=[];
  let t_u_i=0,t_v_i=3;
  let t_u_j=0,t_v_j=3;
  for(let z=0;z<num_box;z++){
    a_i_s[z]=t_u_i;
    a_i_e[z]=t_v_i;
    a_j_s[z]=t_u_j;
    a_j_e[z]=t_v_j;
    if(t_v_j==box_num){
      t_u_i++;
      t_v_i++;
      t_u_j=-1,t_v_j=2;
    }
    t_u_j++;
    t_v_j++;
  }
// console.log("trailarrays",a_i_s,a_i_e,a_j_s,a_j_e);
  for(let z=0;z<num_box;z++){
    let text="";
    let u=0;
    let d_arr=[];
    for(let i=a_i_s[z];i<a_i_e[z];i++){
    for(let j=a_j_s[z];j<a_j_e[z];j++){
    //  text+=`${i}_${j}  `;
      text+=`${trail_arr[i][j]} `;
      d_arr[u]=trail_arr[i][j];
      u++;
    }
    text+="\n  ";
  //  box_logic_check(d_arr,xo);
    }
    box_logic_check(d_arr,xo);
 //   console.log(text);
  }
  
}
//trail();
const box_logic_create=()=>{
  for(let i=0;i<2*b_n+2;i++){
    arr_stages[i]=i*b_n;
  }
  console.log(arr_stages);
  for(let i=0;i<b_n;i++){
    for(let j=0;j<b_n;j++){
      
      if(i==j){
     //   console.log(`@ ${i} ${j}`)
     main_arr_i[arr_stages[0]]=i;
     main_arr_j[arr_stages[0]]=j;
     arr_stages[0]++;
      }
      if(i+j==b_n-1){
      //  console.log(`/ ${i} ${j}`)
     main_arr_i[arr_stages[1]]=i;
     main_arr_j[arr_stages[1]]=j;
     arr_stages[1]++;
      }
      for(let v=0;v<b_n;v++){
      if(i==v){
     main_arr_i[arr_stages[v+2]]=i;
     main_arr_j[arr_stages[v+2]]=j;
     main_arr_i[arr_stages[v+2+b_n]]=j;
     main_arr_j[arr_stages[v+2+b_n]]=i;
     arr_stages[v+2+b_n]++;
     arr_stages[v+2]++;
      }
      }
    }
  }
  let text="";
  for(let i=0;i<main_arr_i.length;i++){
 text+=`${main_arr_i[i]} ${main_arr_j[i]} \n `;
  if((i+1)%b_n==0){
  //  console.log(text);
    text="";
  }
  }
 // console.log(main_arr_i,main_arr_j)
  }
//box_logic_create();
const box_logic_check=(arr,xo)=>{
  const b_n=Math.sqrt(arr.length);
  //console.log(":::::::::::::",b_n,":::::::::::::");
  let trail_arr=[]
  for(let i=0;i<b_n;i++){
    trail_arr[i]=[];
  }
 // console.log("trail_arr",trail_arr);
  let tu=0;
  for(let i=0;i<b_n;i++){
    for(let j=0;j<b_n;j++){
      trail_arr[i][j]=arr[tu];
      tu++;
    }
  }
  
  for(let z=0;z<2*b_n+2;z++){
    let u=z*b_n;
     yes=0;
    let v=0;
   for(let i=0;i<b_n;i++){
    for(let j=0;j<b_n;j++){
   if(trail_arr[i][j] && main_arr_i[u]==i && main_arr_j[u]==j){
  
//console.log(`${xo} => ${main_arr_i[u]}_${i} ${main_arr_j[u]}_${j} ${arr[v]} `);
//console.log("yes",yes+1);
      u++;
      yes++;   
   }
   v++;
  }
  }
  const game_state=document.querySelector(".game_state");
  if(yes==b_n){
    if(xo=="x"){
      yes_x++;
    }
    else{
      yes_o++;
    }
    console.log(yes_x,yes_o);
  if(box_num==3 || g_b_num==box_num*box_num-1){
    
    if(yes_o==yes_x){
      game_state.innerText="Draw";
    }
    else{
    if(yes_o<yes_x){
      xo_w="x";
    }
    else{
      xo_w="o";
    }
    game_state.innerText=xo_w+" - Win ";
    console.log(xo_w,"winnnnnnn",yes,real_g_b_arr);
    }
    game_over=true;
    z=2*b_n+2;
  }
  
    
  }
  
  }
  
}
 //  console.log(main_arr_i,main_arr_j)
const box_c=()=>{
  box_logic_create();
const game_box=document.querySelector(".game_box");
game_box.innerHTML="";
const game_state=document.querySelector(".game_state");
 g_b_num=0;
game_state.innerText="Player - X ";
game_box.style.gap=0.1*(box_num/1.5)+"vh";
let game_arr_x=[];
let game_arr_o=[];
let u=0;
game_over=false;
for(let i=0;i<box_num;i++){
  for(let j=0;j<box_num;j++){
    game_arr_x[u]=0;
    game_arr_o[u]=0;
    u++;
  }
}
//console.log("game_arr",game_arr_x,game_arr_o);
let gu=0;
let g=0;
for(let i=0;i<box_num;i++){
  for(let j=0;j<box_num;j++){
  const g_b=document.createElement("div");
  g_b.classList.add("g_b");
  const g_b_mesurments=()=>{
  g_b.style.paddingTop=(3-0.2*box_num)+"vh";
  g_b.style.fontSize=(13-box_num)+"vh";
  g_b.style.margin=0.1*(8-box_num)+"vh";
  g_b.style.width=87/box_num+"%";
  g_b.style.height=87/box_num+"%";
  }
  g_b_mesurments();
  const c_gu=gu;
 
  g_b_event=()=>{
    const audio = new Audio(`g${4}.m4a`);
  //  console.log(audio);
    audio.play();
    if(g_b.innerText=="" && !game_over){
      g_b.style.boxShadow="0 0 1.5vh white";
    if(g_b_num%2==0){
      g_b.innerText="x";
      game_arr_x[c_gu]=1;
      game_state.innerText="Player - O ";
   //   box_logic_check(game_arr_x,"x");
   yes_x=0;
      trail(game_arr_x,"x");
    }
    else{
      g_b.innerText="o";
      game_arr_o[c_gu]=1;
      game_state.innerText="Player - X ";
     // box_logic_check(game_arr_o,"o");
     yes_o=0;
      trail(game_arr_o,"o");
    }
   // console.log("clicked ",i,j,game_arr_x,game_arr_o);
    g_b_num++;
    if((box_num==3 || yes!=b_n)& g_b_num==box_num*box_num && !game_over)
    {
      game_state.innerText="Draw";
    }
    }
    else{
      g_b.style.boxShadow="0 0.1vh 2vh #58ffb5";
    }
    setTimeout(()=>{
      g_b.style.boxShadow="";
      audio.pause();
    },500);
    
  }
  g_b.addEventListener("click",g_b_event);
 real_g_b_arr[gu]=g_b;
  gu++;
  game_box.append(g_b);
}
}

}
box_c();



const box_level_reset=()=>{
const reset_btn=document.querySelector(".reset_btn");
reset_btn.addEventListener("click",()=>{
  box_c();
})

const game_level=document.querySelector(".game_level");
const g_l_dec=document.querySelector(".g_l_dec");
g_l_dec.addEventListener("click",()=>{
  if(box_num>3){
  box_num--;
  game_level.innerText="Level - "+(box_num-3);
  box_c();
  }
})
const g_l_inc=document.querySelector(".g_l_inc");
g_l_inc.addEventListener("click",()=>{
  if(box_num>7){
    box_num=2;
  }
  box_num++;
  if(box_num-3==5){
    game_level.innerText="Level - MAX";
  }
  else{
  game_level.innerText="Level - "+(box_num-3);
  }
  box_c();
})
}
box_level_reset();


