import java.util.Scanner;

public class lab_3c {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of rows for Pascal's Triangle: ");
        int numRows = scanner.nextInt();

        // Iterate through each row
        for (int i = 0; i < numRows; i++) {
            // Print spaces for alignment
            for (int j = 0; j < numRows - i - 1; j++) {
                System.out.print(" ");
            }

            // Compute and print values in each row
            int number = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(number + " ");
                number = number * (i - j) / (j + 1);
            }

            // Move to the next line for the next row
            System.out.println();
        }

        scanner.close();
    }
}
