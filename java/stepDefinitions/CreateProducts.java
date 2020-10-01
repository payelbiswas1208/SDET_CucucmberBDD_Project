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

public class CreateProducts {
	WebDriver driver;
	WebDriverWait wait;
	String uname = "admin", pwd = "pa$$w0rd", starthour = "20", meetingSubj = "Creating meeting to Test-payel1";

	@Given("^User goes to crm login page$")
	public void loginCrm() throws Throwable {

		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://alchemy.hguy.co/crm/");
		wait = new WebDriverWait(driver, 30);
	}

	@When("^User enters valid credentials to login$")
	public void submitCredential() throws Throwable {

		WebElement userTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("user_name")));
		userTextBox.sendKeys(uname);
		WebElement pwdTextBox = driver.findElement(By.name("username_password"));
		pwdTextBox.sendKeys(pwd);
		WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("bigbutton")));
		submitButton.click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(text(),'SUITECRM DASHBOARD')]")));

	}

	@Then("^User Navigate to All - Products$")
	public void meetingNavigation() {
		WebElement productsLink = driver.findElement(By.xpath("//a[text()='Products']"));
		driver.get(productsLink.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name='Assign']")));

	}

	@And("^User retrieves information about the product \"(.*)\"$")
	public void getProdInfo(String prodName) {
		String xfinder = String.format("//a[contains(text(),'%s')]", prodName);
		WebElement product = driver.findElement(By.xpath(xfinder));
		driver.get(product.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("a[id='tab0']")));
		WebElement prodName_fld = driver.findElement(By.id("name"));
		Assert.assertEquals("Assert name of searched product", prodName , prodName_fld.getAttribute("innerHTML"));
		System.out.println("Product name is " + prodName_fld.getAttribute("innerHTML"));
		WebElement partNum = driver.findElement(By.id("part_number"));
		System.out.println("Part number is " + partNum.getAttribute("innerHTML"));
		WebElement prodType = driver.findElement(By.id("type"));
		System.out.println("Product Type is " + prodType.getAttribute("value"));
		WebElement prodPrice = driver.findElement(By.id("price"));
		System.out.println("Product Price is " + prodPrice.getAttribute("innerHTML"));

	}

	@When("^User clicks on create product add details and save \"(.*)\",\"(.*)\",\"(.*)\"$")
	public void createProducts(String prodNm, String partNum, String price) {
		WebElement createProdLink = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@data-action-name='Create']")));
		driver.get(createProdLink.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("save_and_continue")));
		driver.findElement(By.id("name")).sendKeys(prodNm);
		driver.findElement(By.id("part_number")).sendKeys(partNum);
		driver.findElement(By.id("price")).sendKeys(price);
		driver.findElement(By.cssSelector("input[id='SAVE']")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tab0")));
	}

	@Then("^User verifies added products \"(.*)\"$")
	public void verifyProd(String part_num) {
		WebElement viewProdLink = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@data-action-name='List']")));
		driver.get(viewProdLink.getAttribute("href"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name='Assign']")));
		String xfinder = String.format("//td[contains(text(),'%s')]", part_num);
		WebElement myProd = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xfinder)));
		Assert.assertTrue("Assert added product is found", myProd.isDisplayed());

	}

	@And("^User logout and close$")
	public void logout_close() {

		WebElement logout = driver.findElement(By.xpath("//*[text()='Logout']"));
		driver.get(logout.getAttribute("href"));
		driver.quit();
	}
}
