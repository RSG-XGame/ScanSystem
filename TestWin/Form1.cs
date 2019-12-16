using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TestWin
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            testSEDeviceCtrl1.Initialize(502);
            testSEDeviceCtrl2.Initialize(503);

            Shown += Form1_Shown;
            FormClosing += Form1_FormClosing;
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            testSEDeviceCtrl1.Release();
            testSEDeviceCtrl2.Release();
        }

        private void Form1_Shown(object sender, EventArgs e)
        {
            testSEDeviceCtrl1.Start();
            //testSEDeviceCtrl2.Start();
        }
    }
}
