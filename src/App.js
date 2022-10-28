import logo from './logo.svg';
import './App.css';

function App() {
  
  function init() {
    // get the current time and set to the clock
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    // for the first li for digit-hours, digit-minutes, digit-seconds change to current hours, minutes, seconds
    const digitHours = document.querySelector('.digit-hours');
    const digitMinutes = document.querySelector('.digit-minutes');
    const digitSeconds = document.querySelector('.digit-seconds');
    // in digitHours, the first li is the current hour
    digitHours.querySelector('li:nth-child(1)').innerHTML = hours;
    digitMinutes.querySelector('li:nth-child(1)').innerHTML = minutes;
    digitSeconds.querySelector('li:nth-child(1)').innerHTML = seconds;

    // change the following li's to the next hour, minute, second accordingly for all of them
    // for hours
    for (let i = 2; i <= 12; i++) {
      digitHours.querySelector(`li:nth-child(${i})`).innerHTML = (hours + i - 1) % 12;
    }
    // for minutes
    for (let i = 2; i <= 60; i++) {
      digitMinutes.querySelector(`li:nth-child(${i})`).innerHTML = (minutes + i - 1) % 60;
    }
    // for seconds
    for (let i = 2; i <= 60; i++) {
      digitSeconds.querySelector(`li:nth-child(${i})`).innerHTML = (seconds + i - 1) % 60;
    }

    // change the hands according to the updated time
    const hourHand = document.querySelector('.hours-hand');
    const minuteHand = document.querySelector('.minutes-hand');
    const secondHand = document.querySelector('.seconds-hand');
    hourHand.style.transform = `rotate(${hours * 30}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    
  }
  //call the init function when the page loads
  window.onload = init;

  return (
    <div className="App">
      <div id="watch">
      <div className="frame-face">
      <div className="clock"></div>
      </div>
      <ul className="minute-marks">
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <div className="digital-wrap">
        <ul className="digit-hours">
          <li>23</li>
          <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li>
          <li>06</li><li>07</li><li>08</li><li>09</li><li>10</li><li>11</li>
          <li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li>
          <li>18</li><li>19</li><li>20</li><li>21</li><li>22</li>
        </ul>
        <ul className="digit-minutes">
          <li>10</li><li>11</li>
          <li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li>
          <li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li>
          <li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li>
          <li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li>
          <li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li>
          <li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li>
          <li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li>
          <li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li>
          <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li>
          <li>06</li><li>07</li><li>08</li><li>09</li>
        </ul>
        <ul className="digit-seconds">
          <li>20</li><li>21</li><li>22</li><li>23</li>
          <li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li>
          <li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li>
          <li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li>
          <li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li>
          <li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li>
          <li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li>
          <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li>
          <li>06</li><li>07</li><li>08</li><li>09</li><li>10</li><li>11</li>
          <li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li>
          <li>18</li><li>19</li>
        </ul>
      </div>
      <ul className="digits">
        <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>
        <li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li>
      </ul>
      <div className="hours-hand"></div>
      <div className="minutes-hand"></div>
      <div className="seconds-hand"></div>
    </div>
    </div>
  );
}

export default App;
