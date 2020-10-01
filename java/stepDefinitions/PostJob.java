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

public class PostJob {
	WebDriver driver;
	WebDriverWait wait;

	@Given("^User is on Alchemy site$")
	public void launchNavigate() {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 30);
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/jobs/");
	}

	@When("^User navigates to Post a Job$")
	public void postJobpage() {

		driver.findElement(By.linkText("Post a Job")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name='submit_job']")));
	}

	@Then("^User fills job details \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and submits$")
	public void submitDetails(String email, String jobTitle, String location, String desc, String appEmail,
			String companyName) {

		driver.findElement(By.id("create_account_email")).sendKeys(email);
		driver.findElement(By.id("job_title")).sendKeys(jobTitle);
		driver.findElement(By.id("job_location")).sendKeys(location);
		driver.findElement(By.id("application")).sendKeys(appEmail);
		driver.switchTo().frame("job_description_ifr");
		WebElement content = driver.findElement(By.id("tinymce"));
		content.sendKeys(desc);
		driver.switchTo().defaultContent();
		driver.findElement(By.id("company_name")).sendKeys(companyName);
		driver.findElement(By.cssSelector("input[name='submit_job']")).click();
		WebElement submitListing = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.id("job_preview_submit_button")));
		submitListing.click();

	}

	@When("^User goes to Jobs page$")
	public void jobPage() {

		driver.findElement(By.linkText("Jobs")).click();
		WebElement header = driver.findElement(By.cssSelector("header>h1"));
		Assert.assertEquals("Assert Jobs page", "Jobs", header.getText());
	}

	@Then("^User confirms Job listing \"(.*)\" shown$")
	public void confirmJob(String jobTitle) {
		WebElement searchJobField = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("search_keywords")));
		searchJobField.sendKeys(jobTitle);
		driver.findElement(By.cssSelector("input[value='Search Jobs']")).click();
		String xFinder = String.format("//h3[text()='%s']", jobTitle);
		WebElement myJobFound = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xFinder)));
		Assert.assertEquals("Assert job is found", jobTitle, myJobFound.getText());
	}

	@And("^user quits the browser$")
	public void quitBrowser() {
		driver.quit();
	}

	@And("^user logouts and close webbowser$")
	public void close_browser() {
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Log Out']"));
		driver.get(logOut.getAttribute("href"));
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'logged out')]")));
		driver.quit();
	}

}
