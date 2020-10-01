package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchJobs {
	WebDriver driver;
	WebDriverWait wait;
	String jobName = "Test Specialist";

	@Given("^User is on Alchemy Site$")
	public void gotToSite() {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 30);
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/jobs/");
		
	}

	@When("^User navigates to Jobs$")
	public void jobsPage() {
		WebElement jobLink = wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Jobs")));
		jobLink.click();
	}

	@Then("^User finds a keyword search input field$")
	public void jobListPage() {

		String pageHeading = driver.findElement(By.cssSelector("header>h1")).getText();
		Assert.assertEquals("Assert Header Text", "Jobs", pageHeading);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[id='search_keywords']")));

	}

	@When("^User types a job keyword and clicks Search$")
	public void searchJob() {
		WebElement searchJobField = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[id='search_keywords']")));
		searchJobField.sendKeys(jobName);
		WebElement searchJobBtn = driver.findElement(By.cssSelector("input[value='Search Jobs']"));
		searchJobBtn.click();
	}

	@And("^User changes Job Type$")
	public void changeJobType() {
		/*
		 * List<WebElement> checkBoxes =
		 * driver.findElements(By.name("filter_job_type[]")); for (WebElement element :
		 * checkBoxes) { String idStr = element.getAttribute("id");
		 * System.out.println(idStr);	 			
		}*/
		
		driver.findElement(By.id("job_type_freelance")).click();
		driver.findElement(By.id("job_type_internship")).click();
		driver.findElement(By.id("job_type_part-time")).click();
		driver.findElement(By.id("job_type_temporary")).click();
	}

	@Then("^User finds job and see details$")
	public void jobDetails() {
		String xFinder = String.format("//h3[text()='%s']", jobName);
		WebElement jobToApply = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xFinder)));
		jobToApply.click();
	}

	@And("^User prints title of job$")
	public void printJobTitle() {
		String jobTitle = driver.findElement(By.cssSelector("div>h1")).getText();
		System.out.println(jobTitle);
	}

	@And("^User clicks Apply Job button$")
	public void clickApply() {
		WebElement applyBtn = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[type='button']")));
		applyBtn.click();
	}
	
	@And("^user quits browser$")
	public void quitBrowser()
	{
		driver.quit();
	}

}
