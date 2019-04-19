package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clickingDashboardTitleAndReply {
	
	static String myUserName = "100@accenture.com";
	static String myPassword = "test1234";
	static String newPassword = "1234test";
	
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/admin");
		
		
		Thread.sleep(3000);
		WebElement username = driver.findElement(By.name("email"));
		
		username.sendKeys(myUserName);

		// now locate the password field in the current page
		WebElement password = driver.findElement(By.id("password"));		

		// send password 
		password.sendKeys(myPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		

		//driver.get("http://localhost:3000/changepassword");
		
		
		Thread.sleep(3000);
//		WebElement label1 = driver.findElement(By.id("changePass"));
//		label1.submit();
//		Thread.sleep(10000);
//		WebElement username1 = driver.findElement(By.name("password"));
//		username1.sendKeys(myPassword);

		// now locate the password field in the current page
//		WebElement password1 = driver.findElement(By.id("newPassword"));		
//
//		// send password 
//		password1.sendKeys(myPassword);
//		
//		Thread.sleep(3000);
//				
//		// login and :)
//		WebElement nextButton1 = driver.findElement(By.id("button"));		
//
//		WebElement label2 = driver.findElement(By.id("loginForm"));
//		label2.submit();
		
		java.util.List<WebElement> links = driver.findElements(By.id("titlename"));
		System.out.println(links.size());
		
		//reply
		java.util.List<WebElement> reply = driver.findElements(By.id("replyButton"));
		System.out.println(reply.size());
		for(int i=0; i<reply.size(); i++) {
			System.out.println(i + " " + reply.get(i).getText());
		}
		
		//solve
		java.util.List<WebElement> solve = driver.findElements(By.xpath("//*[@id=\"solveStatus\"]"));
		System.out.println(solve.size());
		for(int i=0; i<solve.size(); i++) {
			System.out.println(i + " " + solve.get(i).getText());
		}
		
		// maximize the browser window
//		driver.manage().window().maximize();
		
		// print all the links
		for (int i = 0; i < links.size(); i=i+1) {
			System.out.println(i + " " + links.get(i).getText());
			System.out.println(i + " " + reply.get(i).getText());
			System.out.println("solve:"+i + " " + solve.get(i).getText());
			System.out.println("*** Navigating to" + " " + links.get(i).getText());
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					
					links.get(i).click();
					System.out.println("*** Navigated to" + " " + links.get(i).getText());
					Thread.sleep(300);
					solve.get(i).click();
					Thread.sleep(300);
					System.out.println("*** Navigated to" + " " + reply.get(i).getText());
					reply.get(i).click();
					Thread.sleep(1000);
					driver.navigate().to("http://localhost:3000/dashboard");
					Thread.sleep(3000);
					links = driver.findElements(By.id("titlename"));
					solve = driver.findElements(By.xpath("//*[@id=\"solveStatus\"]"));
					reply = driver.findElements(By.id("replyButton"));
					//Thread.sleep(3000);
					System.out.println(links.size());
					
//					reply = driver.findElements(By.id("replyButton"));
//					Thread.sleep(3000);
					
					
					
					staleElementLoaded = false;
				}catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
			}
			System.out.println("Finish");
	
			}
		}

	}

}

