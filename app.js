(async function withdrawPendingRequests() {
  try {
    while (true) {
      const withdrawButton = document.querySelector(
        `.invitation-card__action-container > button`
      );
      if (!withdrawButton) {
        console.log("No more pending invitations to withdraw.");
        break;
      }
      withdrawButton.click();
      console.log("Withdraw button clicked. Waiting...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const confirmButton = document.querySelector(
        `button.artdeco-modal__confirm-dialog-btn[data-test-dialog-primary-btn]`
      );
      if (confirmButton) {
        confirmButton.click();
        console.log("Confirmed withdrawal. Waiting...");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();

//paste it on console
