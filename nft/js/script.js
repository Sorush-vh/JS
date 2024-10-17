
app=angular.module("app1",[])
app.controller("firstcontroller" ,function($scope){

  
      setInterval(() => {
         if($scope.firstnft.timeleft[2]==0 && $scope.firstnft.timeleft[1]==0 && $scope.firstnft.timeleft[0]==0){}
         else{
         $scope.firstnft.timeleft[2]--;
         $scope.$apply();
         
         if($scope.firstnft.timeleft[2]==0&& $scope.firstnft.timeleft[1]==!0){
            $scope.firstnft.timeleft[2]=60;
            $scope.firstnft.timeleft[1]--;
            $scope.$apply();
         }
         if($scope.firstnft.timeleft[1]==0 && $scope.firstnft.timeleft[0]== !0){
            $scope.firstnft.timeleft[1]=60;
            $scope.timeleft[0]--
            $scope.$apply();
         }}
      }, 1000);
   
//    $scope.firstnft={
//      timeleft:[01,25,30 ], 
//   }
   $scope.selectedz=[true,false,false,false,false,false];
$scope.selected= function (a) {
     let i=0;
    for(i=0; i<6;i++){
      if(a-1==i){
         $scope.selectedz[i]=true;
      }
      else{
         $scope.selectedz[i]=false
      }
    }
    console.log($scope.selectedz)
}
$scope.buttonselection=[true,false,false,false,false]
$scope.buttonf=function(a){
   let i=0;
   for(i=0;i<5;i++){
      if(a-1==i){
         $scope.buttonselection[i]=true
      }
      else{
         $scope.buttonselection[i]=false
      }
   }
}
$scope.twobuttonselection=[true,false]
$scope.firstbuttonss=function (a){
   for(let i=0; i<2; i++){
      if(a-1==i){
         $scope.twobuttonselection[i]=true
      }
      else{
         $scope.twobuttonselection[i]=false
      }
   }
}
$scope.firstnft={
    picsrc:"img/R.png",
    ownername:"Gabriel Dean",
    timeleft:[00,01,09 ],
    price: "0.0840 BTC",
    namez:"Elon&Doge | Smart-Toy"
}
$scope.mainartists=[
    {
       namezz:"Gabriel Dean",
       itemz:"410 Items", 
    },
    {
        namezz:"Mathew Lean",
        itemz:"207 Items", 
     },
     {
        namezz:"Santel bauer",
        itemz:"410 Items", 
     },]
$scope.moreartistz=[
    {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
     {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
     {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
     {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
     {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
     {
        namezz:"Gabriel Dean",
        itemz:"410 Items", 
     },
]
$scope.moreartistpremission=false
$scope.moreorless=function(){
if($scope.moreartistpremission==true){
    $scope.moreartistpremission=false
} 
else{
    $scope.moreartistpremission=true
}
console.log($scope.moreartistpremission)
}
$scope.nftzzz=[
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"116",
      src:"img/R(1).jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"23",
      src:"img/R(1).jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"34",
      src:"img/R(1).jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"50",
      src:"img/R(1).jfif"
   },
]
$scope.nftzz2=[
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"116",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"23",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"34",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Vitalik Buterin",
      bitcoins:"0.016",
      likes:"50",
      src:"img/lol2.jfif"
   },
]
$scope.nftzz3=[
   {
      selected:false,
      buyername:"Ali Vakilzadeh",
      bitcoins:"0.016",
      likes:"116",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Ali Hatefi",
      bitcoins:"0.016",
      likes:"23",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Sorush Vakilzadeh",
      bitcoins:"0.016",
      likes:"34",
      src:"img/lol2.jfif"
   },
   {
      selected:false,
      buyername:"Sorush Hatefi",
      bitcoins:"0.016",
      likes:"50",
      src:"img/lol2.jfif"
   },
]
// chera enqad hasase?
$scope.likecounter=function(a){
   a.selected= !a.selected;
if(a.selected){
   a.likes++
}
else{
   a.likes--
}
console.log(a.selected)
}
$scope.notifz=[
   {
      namenotif:" Blocksai Fukientea",
      action:"  Liked your post Echidna",
      time:" 15 min ago"
   },
   {
      namenotif:" NFT Pixel Project",
      action:"1 edition listed for 0.018 BTC",
      time:"30 min ago"
   },
   {
      namenotif:" Beobs Sessed",
      action:"Transfered from 0xb560624",
      time:"45 min ago"
   },
]
})