'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  host: Env.get('TRANSMISSION_HOST', 'localhost'),
  port: Env.get('TRANSMISSION_PORT', 9091),
  username: Env.get('TRANSMISSION_USERNAME', ''),
  password: Env.get('TRANSMISSION_PASSWORD', ''),
  ssl: Env.get('TRANSMISSION_SSL', false),
  url: Env.get('TRANSMISSION_URL', '/transmission/rpc'),
  downloadPath: Env.get('TRANSMISSION_DOWNLOAD', '')
}
