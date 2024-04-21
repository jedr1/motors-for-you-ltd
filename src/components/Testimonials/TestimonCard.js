import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: transparent;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 1000px;
  padding: 30px;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const Quote = styled.div`
  font-size: 3rem;
  color: rgb(178, 12, 78);
  text-align: left;
`;
const Text = styled.div`
  font-weight: 300;
`;
const Customer = styled.div`
  text-align: center;
  padding: 50px;
`;
const QuoteRight = styled.div`
  color: rgb(178, 12, 78);
  font-size: 1.6rem;
`;

function TestimonCard() {
  return (
    <>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I’ve recently bought my wife a VW golf Plus from Duncan and can i say
          what a fantastic experience it was. What an absolute gentlemen Duncan
          is ….. the trust Duncan supplys with his approach to car selling is a
          dream . He picked us up from the train station and even bought us some
          doggy chews ..as we are dog lovers and presented then with the car
          ..what a guy .. the car has been great and we will be visiting Motors
          For You in the future. Thanks for everything Duncan.{' '}
        </Text>
        <Customer>- Mr & Mrs Hartley, Barnsley, VW Golf</Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I would just like to thank Duncan from ‘Motors For You Ltd’ for
          finding my daughters first car, She had a favourite car in mind and we
          gave Duncan a choice of around 6 to choose from. Straight away he
          found a different car that we hadn’t thought of, but we turned it
          down, as we did a couple of others he found, then after about six
          weeks I got a call from Duncan to say he had found the perfect one,
          with low mileage, service history etc. I must say you went the extra
          mile to find this one literally (4 hours on a train then a bus ride to
          pick it up). When Duncan got it back to Nottingham he delivered the
          car to our house with a full years mot, service and even touched up
          the small scuff on the bumper so all we had to do was to put L plates
          on then we were off. Thanks again Duncan.
        </Text>
        <Customer>- Mark and Lucy, Grantham, Peugeot 107</Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          We have now bought two cars from Motors For You Ltd since 2014. We
          have been delighted with the faultless level of service and after
          sales care which Duncan has provided. To experience such a relaxed and
          non pressurised approach is a pleasure to see. Duncan has managed to
          source just what we have been looking for, and has even delivered the
          new car to our door in Lincoln! There was a small body issue on our
          Skoda Superb, but Motors for You sorted all these out for us without
          any hassle to ourselves. Keep up the excellent work Duncan and we will
          be coming back to you when we are ready to replace our next car. If
          only all car dealers were like Motors for You.
        </Text>
        <Customer>
          - Andy and Sandra Barron Barron, Lincoln, Seat Altea XL and Skoda
          Superb Greenline
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I just wanted to drop you an email to thank you for your polite and
          professional service. It was a breath of fresh air dealing with you –
          you do business in a different way to other car salesman and its
          brilliant. There was no car salesman upselling/pressure that you
          sometimes get, it was just a nice simple, if you like the car then
          i`ll sell it to you! I live over an hour and a half away from your
          office, however i will be coming back to you for our next cars, as its
          more than worthwhile when you have great service and most importantly
          trust who you buy a car from. Please put this review on your website
          and other social media, i look forward to dealing with you again!
        </Text>
        <Customer>- Dan Miller, Director, Vantage Lettings Ltd</Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          When I decided to buy a new car I was quite specific in what I wanted.
          Main dealers left me feeling dissapointed and I was being persuaded to
          buy cars they had available, rather than the car I actually wanted.
          After recommendation I contacted Duncan at Motors For You. The initial
          consultation was easy, friendly but more importantly, I felt he
          listened to what I wanted. To my amazement he found the car of my
          dreams in six days. I then asked what I needed to do but was told to
          do nothing as the company would take care of everything. True to their
          word, the following week the car was delivered and I can not praise
          enough the service I received. I would recommend anyone to have this
          company supply their next vehicle
        </Text>
        <Customer>
          - Miss Deborah Parr, Burton Joyce, Nottingham, Mercedes Benz CLK280
          Cabriolet.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          It was well worth the long journey from Aberdeen to Nottingham to view
          a car offered for sale by Motors For You Ltd. Motors For You had no
          luxury showrooms or lavish forecourt, instead they had a selective
          stock of quality vehicles at exceedingly good prices. The owner of the
          company, Duncan Horton, clearly had excellent knowledge of the motor
          trade and was also very helpful. Duncan even took the time to meet me
          at Birmingham airport. I have no reservations in recommending Motors
          For You to anyone looking for a reasonably priced quality car. I will
          certainly be contacting Duncan again when I next change my car
        </Text>
        <Customer>
          - John Hough Garromuir, Huntly, Aberdeenshire, Honda CR-V, 2.2 CDTi,
          4×4 Estate.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I have just bought a car from Motors For You Ltd. They were
          recommended to me by a work colleague and I can see why. He and his
          family have bought cars with them for years. No matter what budget
          Motors For You not only go the extra mile but a further ten or so on
          top. As a woman there is always a danger that we get taken advantage
          of by the motor industry. This is simply not the case with Motors For
          You. They take pride in what they do providing a quality, driven
          service for the customer. I will be recommending them in the future to
          all who ask and will have no hesitation in using them again. Thank you
          very much Motors For You
        </Text>
        <Customer>
          - Miss L Gold, Sheffield, Vauxhall Corsa 1.0 Life Hatchback
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          This is our second car from Motors For You Ltd, one from stock and the
          latest, one which Duncan sourced for us. Both times the buying
          experience was easy, we felt we got got value for money and a fair
          part exchange deal. What was also especially reassuring was that when
          we found a body related issue which he and we had missed, Duncan had
          it resolved without any argument and even lent uas a car in the
          meantime. We would definitely recommend anyone wanting to change their
          car to give Motors For You a try – it will renew your faith in the
          motor trade !
        </Text>
        <Customer>
          - Mr and Mrs Buck, Burton Joyce, Nottingham, BMW X1 and Ford Fiesta
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I can highly recommend Duncan at Motors For You. I had never used an
          independant trader before and I must say I am over the moon with his
          service. Not only did he source me the car I wanted within eight days
          but he always kept me informed with the progress and offered me the
          best deal on my part exchange. It is truly refreshing to find such
          honest and reliable people in this day and age. I now know where to go
          for my cars in the future. A big thumbs up !
        </Text>
        <Customer>
          - Mr A. Mengoli, Bestwood Village, Nottingham, Audi A6 Sportline, TDi,
          Avant.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          The last time I bought a car was thirteen years ago so it was with a
          bit of trepidation and fear when I decided to look at the used car
          market for another car. I contacted a few dealers who were quite
          frankly rude. I considered keeping my old car for a few more years
          then I called Duncan at Motors For You in Nottingham. I felt assured
          and respected straight away and finally felt that my enquiry was taken
          seriously. The whole process from start to finish was effortless. I
          drove down from Holyhead and collected my lovely BMW. I can not thank
          them enough. What a pleasure to deal with in this day and age.
        </Text>
        <Customer>
          - Mr David K, Holyhead, BMW 320d SE, Saloon, Automatic
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I decided that I wanted a fairly new estate car and went to a main
          dealer in Nottingham to look at buying one. I wasn’t offered a test
          drive and, even though I was ready to pay a deposit, never had a call
          back as promised. I contacted Motors For You and within two days was
          offered a choice of cars that suited my needs and budget and I was on
          the road in my new car within in a week. I am delighted with the
          service I received and would have no hesitation in recommending Motors
          For You to anyone
        </Text>
        <Customer>
          - Mr S Banks, Burton Joyce, Nottingham, Volvo V50 Estate, Manual.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          Motorsforyou have been excellent from the word go . I would definatly
          deal with and recommend Duncan to anyone . Everything he said was
          accurate and he made sure the car was spotless when we collected it .
          He dealt with all the paper work efficiently and I would buy another
          car from him in a flash. Some previous dealers I have dealt with we’re
          dishonest. Duncan is the absolute opposite. Thanks again
        </Text>
        <Customer>
          - Mr M. Singh, Chesterfield, Derbyshire, Mazda MX-5, 2.0 Sport
          Cabriolet.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          A big thank you to Duncan at Motors For You Ltd ! It isn’t easy buying
          a car without viewing or driving it but I was put completely at ease
          by Duncan all the way through the transaction process and the drive
          back home was a pleasure and more comfortable than my previous BMW !
          Thanks again for finding me a top flight car and be assured that I
          will be recommending you to everyone I know.
        </Text>
        <Customer>
          - Mr Richard Moitie, Doveridge, Derbyshire, Saab 9-3Vector 1.9Tid
          Anniversary.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I decided to purchase a Mercedes Benz E Class diesel and went to my
          local dealer. After a few hours consultation I didn’t have a test
          drive and didn’t have a part exchange price ! A friend told me of
          Motors For You. I went to visit Duncan and within an hour I had a firm
          part exchnage value and within 5 days I was driving the perfect
          E250cdi Sport that he had located for me at a far better price than
          the main dealer. I couldn’t be happier with the whole process !
        </Text>
        <Customer>
          - Mr Mayfield, Epperstone, Nottingham, Mercedes Benz E250 cdi Sport,
          Saloon, Automatic.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          When I enquired about the Mercedes Benz E500 at Motors For You I
          expected to be greeted with the usual rubbish I had experienced from
          other dealers. How wrong I was. Hanna and Duncan were most
          prefessional and courteous. The car was exactly as described and they
          made the whole process a pleasure from start to finish. The car is
          excellent and there is only one place I will be going when I’m ready
          to change again. Thank you
        </Text>
        <Customer>
          - Mr Milverton, Worksop, Mercedes Benz E500, Saloon, Automatic.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I contacted Duncan at Motors For You after a recommendation and, even
          though I didn’t want an expensive car, just something to get to and
          from work, I am absolutely convinced that I received the same care and
          attention to detail as if I’d been looking for a higher spec vehicle.
          He even found a second car which he thought I might prefer and gave me
          solid advice on both cars. He was very professional but also very
          approachable throughout the whole process. It was all completed very
          quickly. I would definitely contact him again in the future and would
          recommend him to anyone.
        </Text>
        <Customer>- Ruth and Ged, Nottingham, Ford Fiesta Zetec.</Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          I would definitely recommend Motors For You to anyone looking to
          purchase a car. They provided an excellent service and found me the
          car of my dreams ! To say I was specific in what I wanted is an
          understatement but Duncan surpassed my expectations. The whole
          experience was pain free and everything was taken care of with little
          fuss and the transition was made simple. I now have my beautiful car
          and have years of happy motoring ahead ! Huzzah !!
        </Text>
        <Customer>
          - Miss Alicia Daly, Anton Marlow Accountants, Nottingham, BMW 330d M
          Sport Saloon.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          When I first considered changing my car for a bigger, better model I
          was a little apprehensive as I had the “stereotypical” car salesman in
          my mind ! A friend mentioned Motors For You saying they were well
          worth a try. I must say I am amazed and overwhelmed by the level of
          service and professionalism that I received from Duncan. He found me
          the right car at the right price in less than a week and took the
          pressure off me selling my car by taking it in part exchange. Motors
          For You are the absolute opposite of the slimy car salesman sterotype
          that litters today’s Used Car Market. I wouldn’t buy a car from
          anywhere else ! Ever ! Again ! Done !
        </Text>
        <Customer>
          - Allan ” Shearer ” Mayfield, Burton Joyce, Nottingham, Ford Focus 1.8
          TDCi, Hatchback.
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          The quality of service we received in making sure we were completely
          satisfied with our purchase of a new car was outstanding. Thankyou for
          everything you did for us
        </Text>
        <Customer>
          - Mr L. Bullock, South Normanton, Derbyshire, BMW 318 Sport Cabriolet.{' '}
        </Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          For the second time in recent years, I had to purchase a car. Based on
          my experience last time, I returned straight to Motors for You in
          Nottingham. I gave them the budget, the specifications and the model I
          was after. Then I put my feet up. A few days later the phone rang.
          They had looked at a few examples of the Mini Cooper I was after and
          not only had they found a fantastic example, but over specified and
          under budget. The car was delivered to my address and the transaction
          was completed. I am delighted with the car and it would’ve taken me
          time/effort/expertise I don’t have to find anything close. I don’t
          think I’ll be going anywhere else, the next time I need a car. Thanks,
          Guys! Top Marks!
        </Text>
        <Customer>- Mr O. Dax, Torquay, Mini Cooper.</Customer>
      </Card>
      <Card>
        <Quote>
          <i class="fa-solid fa-quote-left"></i>
        </Quote>
        <Text>
          After months of trying to find my ideal car and having been let down
          by main dealers I was told of Motors For You by a friend and used
          their ” Locate-A-Car ” service. I was contacted within the hour and
          they found the perfect car for me within two days ! The service I
          received was great and I would recommend them without hesitation. I
          found the whole set up to be just like my car – a real crowd pleaser
          !!
        </Text>
        <Customer>
          - Mr J. Stevenson, Gedling, Nottingham, Smart 4/2 Automatic.
        </Customer>
      </Card>
    </>
  );
}

export default TestimonCard;
