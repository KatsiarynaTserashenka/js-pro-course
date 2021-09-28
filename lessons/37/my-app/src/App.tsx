import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardTitle from './components/CardTitle/CardTitle';
import CardParagraph from './components/CardParagraph/CardParagraph';
import CardList from './components/CardList/CardList';
import Button from './components/Button/Button';
import img from './img-removebg-preview.png';

function App() {
  const listItems1 = [
    '8 hours usage of our coworcing space',
    'Access to All our rooms',
  ];
  const listItems2 = [
    ...listItems1,
    'Dedicated Desk',
    'Free Business Address',
    'Free Lunch 1x a day',
  ];
  return (
    <div className="my-app">
      <Header />
      <div className="App-content">
        <div className="content__item left-item">
          <CardTitle text="Save more with Goodplans." />
          <CardParagraph
            text="Choose a plan and get onboard in minutes. Then get $100 credits for
            your next payment."
          />
          <div className="left-item__img">
            <img src={img} alt={'woman'} className="img" />
          </div>
        </div>
        <div className="content__item center-item">
          <CardTitle text="Day Pass" />
          <CardParagraph text="What You'll Get." />
          <CardList items={listItems1} />
          <CardParagraph text="$20/day" />
          <Button name="Day Pass" text="Choose" />
        </div>
        <div className="content__item right-item">
          <CardTitle text="Monthly Pass" />
          <CardParagraph text="What You'll Get." />
          <CardList items={listItems2} />
          <CardParagraph text="$380/mounth" />
          <Button name="Monthly Pass" text="Choose" />
        </div>
      </div>
    </div>
  );
}

export default App;
