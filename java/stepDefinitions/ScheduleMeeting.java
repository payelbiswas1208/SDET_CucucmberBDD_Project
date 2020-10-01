package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ScheduleMeeting {

	WebDriver driver;
	WebDriverWait wait;
	String uname = "admin", pwd = "pa$$w0rd", starthour = "20", meetingSubj = "Creating meeting to Test-payel1";

	@Given("^User is on crm login page$")
	public void loginPageCrm() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/crm/");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User enters valid credentials and logs in$")
	public void submitCredential() throws Throwable {

		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("user_name")));
		userTextBox.sendKeys(uname);
		WebElement pwdTextBox = driver.findElement(By.name("username_password"));
		pwdTextBox.sendKeys(pwd);
		WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("bigbutton")));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'SUITECRM DASHBOARD')]")));

	}

	@Then("^User Navigate to Activities - Meetings - Schedule a meeting$")
	public void meetingNavigation() {
		WebElement meetings = driver.findElement(By.xpath("//a[text()='Meetings']"));
		driver.get(meetings.getAttribute("href"));
		WebElement scheduleMeetingLink = wait.until(
				ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@data-action-name='Schedule_Meeting']")));
		driver.get(scheduleMeetingLink.getAttribute("href"));
	}

	@And("^User enters meeting details with invitees \"(.*)\",\"(.*)\",\"(.*)\" and clicks Save$")
	public void scheduleMeeting(String invitee1 , String invitee2, String invitee3) {

		
		wait.until(ExpectedConditions.elementToBeClickable(By.id("name")));
		driver.findElement(By.id("name")).click();
		driver.findElement(By.id("name")).sendKeys(meetingSubj);		
		Select hoursdropdown = new Select(driver.findElement(By.id("date_start_hours")));
		hoursdropdown.selectByValue(starthour);
		
		driver.findElement(By.id("search_first_name")).clear();
		driver.findElement(By.id("search_first_name")).sendKeys(invitee1);		
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("invitees_add_1")));
		driver.findElement(By.id("invitees_add_1")).click();
		
		driver.findElement(By.id("search_first_name")).clear();
		driver.findElement(By.id("search_first_name")).sendKeys(invitee2);		
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("invitees_add_1")));
		driver.findElement(By.id("invitees_add_1")).click();
		
		driver.findElement(By.id("search_first_name")).clear();
		driver.findElement(By.id("search_first_name")).sendKeys(invitee3);		
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("invitees_add_1")));
		driver.findElement(By.id("invitees_add_1")).click();
		
		driver.findElement(By.id("SAVE_HEADER")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tab0")));
	}

	@Then("^User navigates View Meetings page and confirm creation of the meeting$")
	public void confirmMtng() {
		WebElement scheduleMeetingLink = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@data-action-name='List']")));
		driver.get(scheduleMeetingLink.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name='Assign']")));
		String xfinder = String.format("//a[contains(text(),'%s')]", meetingSubj);
		WebElement myMeeting = driver.findElement(By.xpath(xfinder));
		Assert.assertTrue("Assert added meeting is found", myMeeting.isDisplayed());
		;
	}

	@And("^user logsOut and closes browser$")
	public void userLogout()

	{
		WebElement logout = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logout.getAttribute("href"));
		driver.quit();
	}

}
