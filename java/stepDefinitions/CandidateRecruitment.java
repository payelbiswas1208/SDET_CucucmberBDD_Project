package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;

import org.junit.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CandidateRecruitment {
	WebDriver driver;
	WebDriverWait wait;
	String username = "orange", passwd = "orangepassword123";

	@Given("^User is on hrm login page$")
	public void loginPage() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://alchemy.hguy.co/orangehrm");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User login with credentials$")
	public void goToHomepage() throws Throwable {
		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("txtUsername")));
		userTextBox.sendKeys(username);
		WebElement pwdTextBox = driver.findElement(By.name("txtPassword"));
		pwdTextBox.sendKeys(passwd);
		WebElement submitButton = driver.findElement(By.id("btnLogin"));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'Dashboard')]")));
	}

	@Then("^User navigates to Recruitment - Candidates menu$")
	public void vacanyMenu() {
		WebElement recruitmentMenu = driver.findElement(By.id("menu_recruitment_viewRecruitmentModule"));
		driver.get(recruitmentMenu.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Vacancy")));
	}

	@When("^User clicks Add candidate and fills details \"(.*)\",\"(.*)\",\"(.*)\" and save$")
	public void addCandidate(String f_name, String l_name, String email) {
		wait.until(ExpectedConditions.elementToBeClickable(By.name("btnAdd")));
		driver.findElement(By.name("btnAdd")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("addCandidate_firstName")));
		driver.findElement(By.id("addCandidate_firstName")).sendKeys(f_name);
		driver.findElement(By.id("addCandidate_lastName")).sendKeys(l_name);
		driver.findElement(By.id("addCandidate_email")).sendKeys(email);

		WebElement resumeFld = driver.findElement(By.id("addCandidate_resume"));
		String expectedFileName = "test1.pdf";
		String path = System.getProperty("user.dir") + File.separator + "files" + File.separator + expectedFileName;
		resumeFld.sendKeys(path);

		driver.findElement(By.id("btnSave")).click();

	}

	@Then("^User verifies added candidate \"(.*)\",\"(.*)\"$")
	public void verifyCandidate(String firstname, String lastname) {
		WebElement recruitmentMenu = driver.findElement(By.id("menu_recruitment_viewRecruitmentModule"));
		driver.get(recruitmentMenu.getAttribute("href"));
		wait.until(ExpectedConditions.elementToBeClickable(By.id("candidateSearch_candidateName")));
		driver.findElement((By.id("candidateSearch_candidateName"))).sendKeys(firstname + " " + lastname);
		wait.until(ExpectedConditions.elementToBeClickable(By.id("btnSrch"))).click();
		String xfinder = String.format("//a[contains(text(),'%s  %s')]", firstname, lastname);
		WebElement candidatefound = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xfinder)));
		Assert.assertTrue("Assert added candidate is found", candidatefound.isDisplayed());
	}

	@And("^User logs out and close$")
	public void logout_Close() {
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logOut.getAttribute("href"));
		driver.quit();
	}
}
