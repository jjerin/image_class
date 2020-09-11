import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Tensor, Rank } from '@tensorflow/tfjs';

@Component({
  selector: 'image-class-flowers',
  templateUrl: './image-class-flowers.component.html',
  styleUrls: ['./image-class-flowers.component.css']
})
export class ImageClassFlowersComponent implements OnInit {

  private model;
  public title = 'image-class'
  image1: HTMLImageElement = new Image();
  imageUrl: any;
  loading: boolean = false;
  class_names: string[] = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'];
  prediction: string;
  prediction_index: number;

  constructor(
  ) { }

  ngAfterViewInit(): void {

  }

  public async ngOnInit(): Promise<void> {
    this.title = 'Loading model, please wait...';
    this.loading = true;
    //this.model = await tf.loadLayersModel('http://localhost:3000/model.json')
    //this.model = await tf.loadLayersModel('http://localhost:3000/model-formatted.json')
    this.model = await tf.loadLayersModel('./assets/model/model-formatted.json')

    console.log(this.model.summary());
    this.loading = false;
    this.title = 'Model Loaded. Select the image!';
  }

  public fileChange(event) {
    console.log('fileChange called: ' + event);
    const file = event.target.files[0];
    console.log('file: ' + file)
    if (file) {
      const reader = new FileReader();
      console.log('reader: ' + reader)

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        console.log('onload')
        let imgSrc = res.target.result;

        this.imageUrl = reader.result;

        this.image1.src = res.target.result;
        console.log('imgSrc: ' + imgSrc);
        console.log('this.image1.src: ' + this.image1.src);

        this.image1.width = 180;
        this.image1.height = 180;

        console.log('width: ' + this.image1.width);
      };
    }

  }

  public onClickPredict(event) {
    console.log('onClickPredict called: ' + event);
    let pixels = tf.browser.fromPixels(this.image1);
    console.log('pixels: ' + pixels);

    let imgtmp = pixels.reshape([1, 180, 180, 3]);
    imgtmp = tf.cast(imgtmp, 'float32');
    console.log('inside imgtmp 1: ' + imgtmp);

    const output = this.model.predict(imgtmp) as any;
    let predictions: number[];
    predictions = Array.from(output.dataSync());
    console.log('predictions 1: ' + predictions);

    let soft = tf.softmax(predictions);
    console.log('soft: ' + soft);

    let soft1: Tensor<Rank>;

    let highest = predictions[0];
    let index: number = 0;
    this.prediction_index = 0;

    for (let i = 0; i < predictions.length; i++) {
      if (predictions[i] > highest) {
        highest = predictions[i];
        this.prediction_index = i;
      }
    }

    console.log('this.prediction_index: ' + this.prediction_index);

  }

  public fileChangeTest(event) {
    console.log('file change event called.');
  }
}