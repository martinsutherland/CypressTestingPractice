package Gatling.simulation

import io.gatling.core.Predef._

import scala.concurrent.duration.DurationInt

class RunSimulation extends Simulation with BasicSimulation {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def rampUserCount: Int = getProperty("RAMP_USERS", "1").toInt
  def rampDuration: Int = getProperty("RAMP_DURATION", "5").toInt
  def constantUserCount: Int = getProperty("CONSTANT_USER_COUNT", "1").toInt
  def constantUserDuration: Int = getProperty("CONSTANT_USER_DURATION", "5").toInt

  setUp(
        scn.inject(
          rampUsers(rampUserCount).during(rampDuration.seconds),
          constantUsersPerSec(constantUserCount).during(constantUserDuration.seconds))
      ).protocols(httpProtocol)

}
