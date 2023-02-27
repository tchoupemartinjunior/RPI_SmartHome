import RPi.GPIO as GPIO
import time
from flask import Flask, jsonify
import flask_cors as flkCors
from flask_sock import Sock
from threading import Thread

import Adafruit_DHT

""" Led section"""
led = 17
ledOn = False
temperature=0
humidity=0
GPIO.setmode(GPIO.BCM)
GPIO.setup(led, GPIO.OUT, initial=GPIO.LOW)


def led_OnOff():
        global ledOn
        ledOn = not ledOn
        if ledOn == True:
                print ("led allume ")
                GPIO.output(led,1)
        else:
                print ("led eteinte ")
                print ("led eteinte ")
                GPIO.output(led,0)
        return jsonify({"ledOn":ledOn})

""" temperature and humidity section"""

sensor = Adafruit_DHT.DHT11
pin = 18


def get_temp_hum():

        global temperature
        global humidity, sensor,pin
        humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

        if temperature is not None and humidity is not None:
                print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
        return jsonify({"temperature":temperature,"humidity":humidity})


"""The web API"""
app = Flask(__name__)
flkCors.CORS(app)

