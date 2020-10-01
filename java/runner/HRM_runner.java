package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/java/Features",
    glue = {"stepDefinitions"},
    tags = {"@HRM_Activity_1"},
    strict = true,
    plugin = {"pretty", "html: test-reports"},
    monochrome = true
)
public class HRM_runner {

}
