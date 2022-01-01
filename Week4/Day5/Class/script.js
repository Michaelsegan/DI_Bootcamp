class Tv {
constructor (tvBrand,tvChannel = 1, tvVolume = 50 ){
    this.tvBrand = Brand;
    this.tvChannel = Channel;
    this.tvVolume = Volume;

    this.increaseVolume = function () {
        this.volume += 1;
      };
      this.decreaseVolume = function () {
              this.volume -= 1;
            };
}
}
class Lg extends Tv {
    constructor
}














// function TV(tvBrand, tvChannel = 1, tvVolume = 50) {
//     this.brand = tvBrand;
//     this.channel = tvChannel;
//     this.volume = tvVolume;
//     this.increaseVolume = function () {
//       this.volume += 1;
//     };
//     this.decreaseVolume = function () {
//       this.volume -= 1;
//     };
//   }
  
//   let lgTv = new TV("LG");
  
//   console.log(lgTv);