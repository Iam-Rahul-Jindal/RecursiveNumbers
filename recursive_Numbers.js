<script>
     
    // Recursive Function to prints numbers from 1 to n
    function printNumbers(n)
    {
        if(n > 0)
        {
            printNumbers(n - 1);
            document.write(n + " ");
        }
        return;
    }
     
    printNumbers(50);
 
</script>


