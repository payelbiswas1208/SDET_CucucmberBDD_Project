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

public class CreateLeads {

	WebDriver driver;
	WebDriverWait wait;
	String uname = "admin", pwd = "pa$$w0rd";

	@Given("^User is on crm Login Page$")
	public void loginCrm() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/crm/");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User enters Username and Password and logs in$")
	public void submitCredential() throws Throwable {

		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("user_name")));
		userTextBox.sendKeys(uname);
		WebElement pwdTextBox = driver.findElement(By.name("username_password"));
		pwdTextBox.sendKeys(pwd);
		WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("bigbutton")));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'SUITECRM DASHBOARD')]")));

	}

	@Then("^User Navigate to Sales - Leads - Create Lead$")
	public void leadNavigation() {
		WebElement leadsLink = driver.findElement(By.xpath("//a[text()='Leads']"));
		driver.get(leadsLink.getAttribute("href"));
		WebElement createLeadLink = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@data-action-name='Create']")));
		driver.get(createLeadLink.getAttribute("href"));
	}

	@And("^User fills details \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and clicks Save$")
	public void createLeads(String fname, String lname, String phone, String email) {

		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("first_name")));
		driver.findElement(By.id("first_name")).sendKeys(fname);
		driver.findElement(By.id("last_name")).sendKeys(lname);
		driver.findElement(By.id("phone_work")).sendKeys(phone);
		driver.findElement(By.cssSelector("input[id='Leads0emailAddress0']")).sendKeys(email);
		driver.findElement(By.cssSelector("input[id='SAVE']")).click();
		driver.findElement(By.cssSelector("input[title='Save']")).click();

	}

	@Then("^User views Leads \"(.*)\" on page$")
	public void viewLead(String emailid) {
		WebElement leadsLink_1 = driver.findElement(By.xpath("//a[text()='Leads']"));
		driver.get(leadsLink_1.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name='Assign']")));
		String xfinder = String.format("//a[contains(text(),'%s')]", emailid);
		WebElement myLead = driver.findElement(By.xpath(xfinder));
		Assert.assertTrue("Assert added Lead is found", myLead.isDisplayed());
	}

	@And("^Logs out and close browser$")
	public void logOut() {
		WebElement logout = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logout.getAttribute("href"));
		driver.quit();
	}

}
