package stepDefinitions;

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
import junit.framework.Assert;

public class CreateUserJobBoard {
	WebDriver driver;
	WebDriverWait wait;
	String username = "ishanbhatt", email = "testnewuser@wpsavy.com";

	@Given("^User is on Login Page$")
	public void loginPage() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/jobs/wp-admin");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User submits username and password$")
	public void enterCredentials() throws Throwable {

		String username = "root", password = "pa$$w0rd";
		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("log")));
		userTextBox.sendKeys(username);
		WebElement pwdTextBox = driver.findElement(By.name("pwd"));
		pwdTextBox.sendKeys(password);
		WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("wp-submit")));
		submitButton.click();

	}

	@Then("^User should be logged in$")
	public void verifyLogin() throws Throwable {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[text()='WordPress Events and News']")));
	}

	@When("^User clicks menu item Users$")
	public void clickUsersMenu() throws Throwable {
		driver.findElement(By.linkText("Users")).click();
	}

	@And("^User clicks Add New button$")
	public void clickAddNewBtn() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Add New")));
		driver.findElement(By.linkText("Add New")).click();
	}

	@Then("^User fills user details and clicks Add New User button$")
	public void fillUserDetails() throws Throwable {

		wait.until(ExpectedConditions.elementToBeClickable(By.id("createusersub")));
		driver.findElement(By.id("user_login")).sendKeys(username);
		driver.findElement(By.id("email")).sendKeys(email);
		//driver.manage().timeouts().implicitlyWait(9, TimeUnit.SECONDS);
		driver.findElement(By.id("createusersub")).submit();

	}

	@Then("^Verify user created$")
	public void verifyUserCreated() throws Throwable {

		wait.until(ExpectedConditions.elementToBeClickable(By.id("user-search-input")));
		driver.findElement(By.id("user-search-input")).sendKeys(email);
		driver.findElement(By.cssSelector("input[value='Search Users']")).click();
		String xfinder = String.format("//a[contains(text(),'%s')]", email);
		WebElement user_found = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xfinder)));
		Assert.assertTrue("Assert user is added", user_found.isDisplayed());
	}

	@And("^Close the browser$")
	public void closeBrowser() throws Throwable {
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Log Out']"));
		driver.get(logOut.getAttribute("href"));
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'logged out')]")));
		driver.quit();
	}
}
