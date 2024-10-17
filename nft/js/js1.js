lolz = angular.module("app1", [])
lolz.controller("cntrl1", function ($scope) {

    $scope.i = 0
    $scope.likecounter = function (dastan) {
    dastan.selected = !dastan.selected;
    if(dastan.selected){
        dastan.likecount++
    }
    else{
        dastan.likecount--
    }
    }
    $scope.moreartistdiv = function () {
        // getelementbyid-->display+ taqire matn
    }



    $scope.credit = {
        cardnumber: "********9850",
        type: "Bitcoin",
        count: "1.90152"
    }
    $scope.firstnft_stats = {
        nftpicsrc: "img/R.png",
        nftinvestorpicsrc: "img/R.jfif",
        investorname: "Gabriel Dean",
        nftname: "Elon&Doge | Smart-Toy",
        auctiontime: { hrs: 23, mins: 44, sec: 11 },
        currentbid: " 0.0843 BTC"
    }
    $scope.profiles1 = [
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
    ]
    $scope.nftz = [
        {
            selected:false,
            costz: "0.00769",
            likecount: "58",
            buyername: "Vitalik Buterin",
            nftzsrc: "img/R(1).jfif"
        },
        {
            selected:false,
            costz: "0.00769",
            likecount: "58",
            buyername: "Vitalik Buterin",
            nftzsrc: "img/R(1).jfif"
        },
        {
            selected:false,
            costz: "0.00769",
            likecount: "58",
            buyername: "Vitalik Buterin",
            nftzsrc: "img/R(1).jfif"
        },
        {
            selected:false,
            costz: "0.00769",
            likecount: "58",
            buyername: "Vitalik Buterin",
            nftzsrc: "img/R(1).jfif"
        },
    ]


    $scope.profiles2 = [
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },
        {
            picsrc: "img/R.jfif",
            username: "Gabriel Dean",
            itemnumbers: "520"
        },

    ]
    $scope.activitiez = [
        {
            activist: "Blocksai Fukintea",
            action: "liked your photo",
            timez: " 15 mins ago"
        },
        {
            activist: "NFT Pixel Project",
            action: "1 edition listed for 0.018BTC",
            timez: " 30 mins ago"
        },
        {
            activist: "Beobs Sessed",
            action: "transfered from 0xb560624",
            timez: " 45 mins ago"
        },
    ]

})