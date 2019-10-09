
let b = [5,7,[4,[2],8,[1,3],2],[9,[]],1,8];    
var sum = 0;

function treeSum(a){
    var s = 0;
for(var i=0;i<a.length;i++){
    var item = a[i];
    if(typeof item =='number'){   
        s+=item;
    }
    else
       s+=treeSum(item);
    }
   return s;
}

console.log(treeSum(b));
