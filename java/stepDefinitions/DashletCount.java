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
import java.util.List;

public class DashletCount {
	WebDriver driver;
	WebDriverWait wait;
	String uname = "admin", pwd = "pa$$w0rd";

	@Given("^User is on CRM Login Page$")
	public void loginCRM() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/crm/");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User submits Username and Password and logs in$")
	public void enterCredential() throws Throwable {

		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("user_name")));
		userTextBox.sendKeys(uname);
		WebElement pwdTextBox = driver.findElement(By.name("username_password"));
		pwdTextBox.sendKeys(pwd);
		WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("bigbutton")));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'My Top Open Opportunities')]")));

	}

	@Then("^User prints the count and title of dashlets$")
	public void dashletcount() throws Throwable{
		List<WebElement> dashlets = driver.findElements(By.cssSelector("div[class='dashletPanel']"));
		System.out.println("Dashlet count : " + dashlets.size());
		for (int i=1;i<=dashlets.size();i++) {
			String xfinder = String.format("(//td[@class='dashlet-title']/h3/span[2])[%d]",i);
			WebElement dashletTitle = driver.findElement(By.xpath(xfinder));
			System.out.println("Name of dashlet " + dashletTitle.getText());
		}

	}
	
	@And("^Logs out and closes browser$")
	public void logout() throws Throwable
	{
		WebElement logOut = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logOut.getAttribute("href"));
		driver.quit();
	}

}
