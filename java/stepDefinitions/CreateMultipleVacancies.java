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

public class CreateMultipleVacancies {

	WebDriver driver;
	WebDriverWait wait;
	String uname = "orange", pwd = "orangepassword123";

	@Given("^User launches hrm login page$")
	public void loginPage() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://alchemy.hguy.co/orangehrm");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User Logs in with Credentials$")
	public void goToHomepage() throws Throwable {
		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("txtUsername")));
		userTextBox.sendKeys(uname);
		WebElement pwdTextBox = driver.findElement(By.name("txtPassword"));
		pwdTextBox.sendKeys(pwd);
		WebElement submitButton = driver.findElement(By.id("btnLogin"));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'Dashboard')]")));
	}

	@Then("^User navigates to Recruitment - Vacancies$")
	public void vacanyMenu() {
		WebElement recruitmentMenu = driver.findElement(By.id("menu_recruitment_viewRecruitmentModule"));
		driver.get(recruitmentMenu.getAttribute("href"));
		WebElement vacancyMenu = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.id("menu_recruitment_viewJobVacancy")));
		driver.get(vacancyMenu.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Vacancy")));
	}


	@When("^User clicks on Add Vacancy fills details \"(.*)\",\"(.*)\",\"(.*)\" and save$")
	public void fillVacancy(String vacancyName, String jobName, String hiringManager) throws Throwable {
		
		
		wait.until(ExpectedConditions.elementToBeClickable(By.name("btnAdd")));
		driver.findElement(By.name("btnAdd")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("btnSave")));
		Select jobTitle = new Select(driver.findElement(By.id("addJobVacancy_jobTitle")));
		jobTitle.selectByVisibleText(jobName);
		driver.findElement(By.id("addJobVacancy_name")).sendKeys(vacancyName);
		driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys(hiringManager);
		driver.findElement(By.name("btnSave")).click();
		WebElement vacancy_Menu = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.id("menu_recruitment_viewJobVacancy")));
		driver.get(vacancy_Menu.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Vacancy")));

	}
	@Then("^User verifies added vacancy for \"(.*)\"$")
	public void verify_vacancy(String vacancy_value) {
		
		WebElement vacancyMenu = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.id("menu_recruitment_viewJobVacancy")));
		driver.get(vacancyMenu.getAttribute("href"));
		wait.until(ExpectedConditions.elementToBeClickable(By.id("vacancySearch_jobTitle")));
		Select vacancySearch = new Select(driver.findElement(By.id("vacancySearch_jobVacancy")));
		vacancySearch.selectByVisibleText(vacancy_value);
		driver.findElement(By.id("btnSrch")).click();
		String xfinder = String.format("//a[contains(text(),'%s')]", vacancy_value);
		WebElement vacancyFound = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xfinder)));
		Assert.assertEquals("Assert added vacancy is found", vacancyFound.getAttribute("innerHTML"), vacancy_value);

	}
	@And("^User then logout and close$")
	public void logout_Close() {
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logOut.getAttribute("href"));
		driver.quit();
	}
}
