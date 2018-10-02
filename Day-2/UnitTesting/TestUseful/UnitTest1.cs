using System;
using TestUseful;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestUseful
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestAddZeroes()
        {
            int num1 = 0;
            int num2 = 0;
            int expected = 0;

            UnitTesting.Adder adder = new UnitTesting.Adder();

            //Act 
            int actual = adder.Add(num1, num2);

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestAddNegs()
        {
            int num1 = -1;
            int num2 = -1;
            int expected = -2;

            UnitTesting.Adder adder = new UnitTesting.Adder();

            //Act 
            int actual = adder.Add(num1, num2);

            //Assert
            Assert.AreEqual(expected, actual);
        }
    }
}
