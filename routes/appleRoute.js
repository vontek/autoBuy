const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();

const TEAM_ID = 'YOUR_TEAM_ID';
const CLIENT_ID = 'YOUR_CLIENT_ID';
const KEY_ID = 'YOUR_KEY_ID';
const PRIVATE_KEY = 'PRIVATE_KEY';

router.get('/auth/apple', (req, res) => {
  const scope = 'email name';
  const state = 'YOUR_STATE';
  const redirectUri = 'YOUR_REDIRECT_URI';

  const authorizationUri = `https://appleid.apple.com/auth/authorize?response_type=code id_token&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&response_mode=form_post`;

  res.redirect(authorizationUri);
});

router.post('/auth/apple/callback', async (req, res) => {
  const { code, id_token } = req.body;

  try {
    const applePublicKey = await axios.get(`https://appleid.apple.com/auth/keys`);
    const decoded = jwt.verify(id_token, applePublicKey.data, { algorithms: ['RS256'] });

    res.redirect('/');
  } catch (error) {
    console.error('Error:', error.message);
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
