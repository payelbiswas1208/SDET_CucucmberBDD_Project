package stepDefinitions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

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

public class EmployeesAdd {

	WebDriver driver;
	WebDriverWait wait;
	String username = "orange", passwd = "orangepassword123";
	List<String> empId = new ArrayList<String>();

	@Given("^User opens hrm login page$")
	public void login_Page() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://alchemy.hguy.co/orangehrm");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User logs in with credentials$")
	public void homepage() throws Throwable {
		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("txtUsername")));
		userTextBox.sendKeys(username);
		WebElement pwdTextBox = driver.findElement(By.name("txtPassword"));
		pwdTextBox.sendKeys(passwd);
		WebElement submitButton = driver.findElement(By.id("btnLogin"));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'Dashboard')]")));
	}

	@Then("^User navigates to PIM menu$")
	public void pimMenu() {
		WebElement pimMenu = driver.findElement(By.id("menu_pim_viewPimModule"));
		driver.get(pimMenu.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Id")));
	}

	@When("^User adds employee details \"(.*)\",\"(.*)\",\"(.*)\" and saves$")
	public void addEmp(String firstName, String lastName, String username) {

		WebElement addEmpBtn = driver.findElement(By.id("menu_pim_addEmployee"));
		driver.get(addEmpBtn.getAttribute("href"));

		wait.until(ExpectedConditions.elementToBeClickable(By.id("firstName")));
		String empid_value = driver.findElement(By.id("employeeId")).getAttribute("value");
		empId.add(empid_value);
		driver.findElement(By.id("firstName")).sendKeys(firstName);
		driver.findElement(By.id("lastName")).sendKeys(lastName);
		driver.findElement(By.id("chkLogin")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("user_name")));
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id='btnSave']")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("btnAddAttachment")));
	}

	@Then("^User verifies added employees$")
	public void verifyEmpAdd() {
		
		Iterator<String> iterator = empId.iterator();
		while (iterator.hasNext()) {
			System.out.println("Employee Id of added user is "+iterator.next());
		}
		WebElement pimMenu_link = driver.findElement(By.id("menu_pim_viewPimModule"));
		driver.get(pimMenu_link.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Id")));
		for(int i=0; i<3 ;i++) {
		
		wait.until(ExpectedConditions.elementToBeClickable(By.id("empsearch_id"))).clear();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("empsearch_id"))).sendKeys(empId.get(i));
		wait.until(ExpectedConditions.elementToBeClickable(By.id("searchBtn"))).click();
		String xfinder = String.format("//a[contains(text(),'%s')]", empId.get(i));
		WebElement empIdfound = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xfinder)));
		
		Assert.assertTrue("Assert added employee is found", empIdfound.isDisplayed());
		}
			
	}

	@And("^user logsOut and quits browser$")
	public void logout_Close() {
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logOut.getAttribute("href"));
		driver.quit();
	}
}
