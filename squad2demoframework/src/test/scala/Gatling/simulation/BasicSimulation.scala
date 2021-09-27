package Gatling.simulation

import io.gatling.core.Predef.{exec, scenario}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status}
import io.gatling.http.protocol.HttpProtocolBuilder
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

trait BasicSimulation {

  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("http://computer-database.gatling.io")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  object GetHomePage {
    val getHomePage: ChainBuilder =
      exec(
        http("GET - homepage")
          .get("/")
          .check(status.is(200))
          )
      .pause(5)
  }

  object GetComputers {
    val getComputers: ChainBuilder =
      exec(
        http("GET - macbook")
          .get("/computers?f=macbook")
          .check(status.is(200))
      ).pause(5)
  }



  val scn = scenario("Simulation Example")
    .exec(
      GetHomePage.getHomePage,
      GetComputers.getComputers
    )
    .pause(5)



}
