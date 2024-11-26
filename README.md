# Withdrawly

Withdrawly is a simple browser script to automatically withdraw your pending LinkedIn invitation requests. Paste the provided JavaScript code into your browser's console to automate the process.

## How It Works
1. **Navigates the Invitations Page**: The script identifies pending invitations on LinkedIn's "Manage Invitations" page.
2. **Withdraws Invitations**: It clicks the "Withdraw" button for each pending request and confirms the action.
3. **Repeats Until Done**: The script continues this process until all pending invitations are withdrawn.

## Steps to Use

1. **Go to LinkedIn Invitations Page**
   - Open your browser and navigate to the following page:
     ```
     https://www.linkedin.com/mynetwork/invitation-manager/sent/
     ```

2. **Open the Browser Console**
   - Use the keyboard shortcut to open the developer tools:
     - **Windows/Linux**: Press `Ctrl + Shift + J`
     - **Mac**: Press `Cmd + Option + J`

3. **Paste the Script**
   - Copy and paste the following code into the console:

     ```javascript
     (async function withdrawPendingRequests() {
       try {
         while (true) {
           // Find and click the "Withdraw" button
           const withdrawButton = document.querySelector(
             `.invitation-card__action-container > button`
           );
           
           if (!withdrawButton) {
             console.log("No more pending invitations to withdraw.");
             break;
           }

           withdrawButton.click();
           console.log("Withdraw button clicked. Waiting...");

           // Wait for 1.5 seconds
           await new Promise((resolve) => setTimeout(resolve, 1500));

           // Confirm the withdrawal
           const confirmButton = document.querySelector(
             `button.artdeco-modal__confirm-dialog-btn[data-test-dialog-primary-btn]`
           );

           if (confirmButton) {
             confirmButton.click();
             console.log("Confirmed withdrawal. Waiting...");
           }

           // Wait for 1 second before proceeding to the next invitation
           await new Promise((resolve) => setTimeout(resolve, 1000));
         }
       } catch (error) {
         console.error("An error occurred:", error);
       }
     })();
     ```

4. **Watch the Automation**
   - The script will withdraw pending invitations one by one, and you'll see logs in the console for each action.

## Disclaimer
- **Use Responsibly**: Automated actions on LinkedIn may violate their terms of service. Use this script at your own discretion.
- **Maintenance**: LinkedIn's UI might change over time, so the script selectors may need updates.

