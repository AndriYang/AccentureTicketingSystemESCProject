package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class changePasswordUpdated {
	static String myUserName = "100@accenture.com";
	static String myPassword = "test1234";
	static String myCurrentPassword = "test1234";
	static String myNewPassword = "1234test";
	
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/admin");
		
		
		Thread.sleep(3000);
		WebElement username = driver.findElement(By.name("email"));
		
		username.sendKeys(myUserName);

		// now locate the password field in the current page
		WebElement password = driver.findElement(By.id("password"));		
		System.out.println(password);
		// send password 
		password.sendKeys(myPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
			
		//Thread.sleep(3000);
		
		for(int i=0; i<2; i++) {
			try {
				WebDriverWait wait = new WebDriverWait(driver, 10);
				// wait only until the password element becomes visible
				wait.until(ExpectedConditions.elementToBeClickable(By.id("changePass")));		
				// now locate the password field in the current page
				WebElement changePassButton = driver.findElement(By.id("changePass"));
				changePassButton.click();	
				
			} catch (Exception NoSuchElementException) {
				System.out.println("login name invalid");}
				if(i==0) {
					try {
						WebDriverWait wait = new WebDriverWait(driver, 10);
						// wait only until the password element becomes visible
						wait.until(ExpectedConditions.elementToBeClickable(By.id("newPassword")));		
						// now locate the password field in the current page
						WebElement newPassword = driver.findElement(By.id("newPassword"));		

						// send password 
						newPassword.sendKeys(myNewPassword);
						
						WebElement oldPassword = driver.findElement(By.name("oldPassword"));
						System.out.println(oldPassword);
						oldPassword.sendKeys(myPassword);
						WebElement nextButton2 = driver.findElement(By.id("confirm"));		

						WebElement label2 = driver.findElement(By.id("loginFormChange"));
						//label2.submit();
						nextButton2.click();
						
						WebElement logout = driver.findElement(By.id("logout"));
						logout.click();
						
					} catch (Exception NoSuchElementException) {
						System.out.println("login name invalid");
					}
				}
				
				else {
					try {
						WebDriverWait wait = new WebDriverWait(driver, 10);
						// wait only until the password element becomes visible
						wait.until(ExpectedConditions.elementToBeClickable(By.id("newPassword")));		
						// now locate the password field in the current page
						WebElement newPassword = driver.findElement(By.id("newPassword"));		

						// send password 
						newPassword.sendKeys(myPassword);
						
						WebElement oldPassword = driver.findElement(By.name("oldPassword"));
						System.out.println(oldPassword);
						oldPassword.sendKeys(myNewPassword);
						WebElement nextButton2 = driver.findElement(By.id("confirm"));		

						WebElement label2 = driver.findElement(By.id("loginFormChange"));
						//label2.submit();
						nextButton2.click();
						
						WebElement logout = driver.findElement(By.id("logout"));
						logout.click();
						
					} catch (Exception NoSuchElementException) {
						System.out.println("login name invalid");
					}
				}
			
			try {
				WebDriverWait wait = new WebDriverWait(driver, 10);
				// wait only until the password element becomes visible
				wait.until(ExpectedConditions.elementToBeClickable(By.id("admin")));		
				// now locate the password field in the current page
				WebElement admin = driver.findElement(By.id("admin"));
				admin.click();
				
				WebElement username2 = driver.findElement(By.name("email"));
				
				username2.sendKeys(myUserName);

				// now locate the password field in the current page
				WebElement password2 = driver.findElement(By.id("password"));		
				System.out.println(password2);
				// send password 
				password2.sendKeys(myNewPassword);
				Thread.sleep(1000);		
				// login and :)
				WebElement nextButton3 = driver.findElement(By.id("button"));		

				WebElement label3 = driver.findElement(By.id("adminLoginForm"));
				label3.submit();
				
			} catch (Exception NoSuchElementException) {
				System.out.println("login name invalid");}
		}
		//explicitly wait until the password field is present in the page
				
	}
}
