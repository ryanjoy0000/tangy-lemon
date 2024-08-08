import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(@Inject(DOCUMENT) private doc: Document) { }

  faSuitcase = faSuitcase;

  items = [
    {
      title: `Network Monitoring Tool with Go`,
      body: `It is a lightweight application developed in Go
      for real-time monitoring of network performance and health.
      It provides essential metrics such as latency, bandwidth, and packet loss
      to ensure optimal network functionality. The tool is designed for easy integration
      and usability, making it ideal for network administrators and developers.`,
      btn1_text: `Github`,
      btn1_link: `https://github.com/ryanjoy0000/go-network-monitoring-tool`,
    },
    {
      title: `Youtube Notifier (Telegram Bot) -
      A real time data processing pipeline,`,
      body: `It helps in tracking the changes
      in the YouTube statistics (likes, comments, etc.) of a video
      (or list of videos) not owned by me on YouTube.
      A telegram bot at the end of the pipeline provides
      the relevant info as alerts. Tech used: Go, Apache Kafka, Confluent Cloud, ksqlDB,
      Telegram API, Google API`,
      btn1_text: `Github`,
      btn1_link: `https://github.com/ryanjoy0000/yt-notifier`,
    },
    {
      title: 'CREDITY - Cloud SAAS solution',
      body: `SAAS solution for the efficient management of financial
      and compliance risks in a customer and supplier portfolio
      for the European Market Tech used : Angular 4, Typescript, Java,
      Springboot, MSSQL, RedHat OpenShift and related tech.`,
      btn1_text: `Info Website`,
      btn1_link: `https://live.crif.de/credity-en/`,
    },
    {
      title: 'Amazon Alexa Skill - Bruyere Village Event Calendar',
      body: `App on Alexa device, which is live on the playstore for Alexa skills.
      This app is developed for the seniors in the residential properties of
      Bruyere Village, Ottawa ON. The app provides a voice interface for the seniors,
      to know more about the daily schedule of their residence.`,
      btn1_text: `Live`,
      btn1_link: `https://www.amazon.ca/Connected-Canadians-Bruyere-Village-Calendar/dp/B0C91ZG4RG/ref=sr_1_3?brr=1&qid=1706199860&rd=1&s=digital-skills&sr=1-3`,
    },
    {
      title: 'Tic Tac Toe game using Go',
      body: 'A small tic tac toe game using Go that runs on the command line',
      btn1_text: `Github`,
      btn1_link: `https://github.com/ryanjoy0000/go-tic-tac-toe`,
    },
  ];

  btnClicked(ev: Event, url = '') {
    if (ev) {
      ev.preventDefault();
    }
    this.doc.location.href = url;
  }
}
