function disp(s1:string):void;
function disp(n1:any,s1:string):void;


function disp(x:any, y?:any):void{
    console.log('x : ', x);
    console.log('y : ', y);
}

disp('ayush');
disp('ayush',1);