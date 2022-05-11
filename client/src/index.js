import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const express = require('express')
const path= require('path')
const exphbs  = require('express-handlebars');
 // const { engine }  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
