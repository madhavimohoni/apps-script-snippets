function modifySharedResource() {
  
    // ...

    var lock = LockService.getScriptLock();     // Get script lock
    lock.waitLock(30000);                       // Wait for other processes for up to 30s
    
    // ... modify shared resource ...
    
    lock.releaseLock();                         // Release lock for other processes to continue

    // ... 
    
}