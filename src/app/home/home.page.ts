import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Text_en = [];
  Text_vi = [];

  constructor(
    private textToSpeech: TextToSpeech
  ) {
    this.Text_en = [
      "Things are going well so far",
      "That's the last straw",
      "The best of both worlds",
      "The person we were just talking about showed up!"      
    ];

    this.Text_vi = [
      "Thử tiếng Việt",
      "Nhiều người dân ở xã Y Tý (Lào Cai) cho biết sáng nay tuyết rơi trắng xoá nhiều con đường, làng bản khiến cho khung cảnh nơi đây đẹp như châu Âu.",
      "Sáng 11/1, người dân ở xã Y Tý (huyện Bát Xát, tỉnh Lào Cai) chia sẻ, mưa tuyết bắt đầu rơi từ 22h ngày 10/1 nhưng chưa dày đặc. Đến sáng nay, tuyết rơi nhiều hơn, phủ trắng cả Y Tý."
    ];
  }

  convertTextToSpeech_en(text) {
      this.textToSpeech.speak({
        text: text,
        locale: 'en-GB',
        rate: 0.75
    })
    .then(() => 
      console.log('Done')
    )
    .catch((reason: any) => 
      console.log(reason)
    );
  }

  convertTextToSpeech_vi(text) {
    this.textToSpeech.speak({
        text: text,
        locale: 'vi-VN',
        rate: 1
    })
    .then(() => 
      console.log('Done')
    )
    .catch((reason: any) => 
      console.log(reason)
    );
  }

}
