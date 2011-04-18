package controllers

import play._
import play.mvc._


/**
 * The main controller for the inmail plugin hack.
 */
object Application extends Controller {

  /**
   * This serves the main intro to the plugin which gives a description of
   * what this is about, a sign-in link and takes you to the "third party"
   */
    def index = Template

  /**
   * The original play framework index intro
   */
    def intro = Template

  /** The inmail plugin.
   * Play does not support a POST to a static route so we need to use a controller to fetch it.
   */
    def inmailplugin = {
      Template
    }

  /** The shared plugin.
   * Play does not support a POST to a static route so we need to use a controller to fetch it.
   */
    def sharedplugin = {
      Template
    }

  /**
   * Just for sanity checking
   */
    def helloplay = {
      val playdate = new java.util.Date
      Template('playdate -> playdate)
    }
    
}
