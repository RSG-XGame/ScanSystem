using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using ScanSystem.Hardwares.Implementations.SchneiderElectric;
using ScanSystem.Hardwares.Interfaces.Variables;
using ScanSystems.Protocols.Modbus.Common;

namespace TestWin.SETest
{
    public partial class TestSEDeviceCtrl : UserControl
    {
        private SEDevice device;

        public TestSEDeviceCtrl()
        {
            InitializeComponent();
            Initialize();
        }

        public void Initialize()
        {
            device = TestSEDevice.CreateSEDevice();

            int index = 0;
            bindTextBox(textBox1, index++);
            bindTextBox(textBox2, index++);
            bindTextBox(textBox3, index++);
            bindTextBox(textBox4, index++);
            bindTextBox(textBox5, index++);
            bindTextBox(textBox6, index++);
            bindTextBox(textBox7, index++);
            bindTextBox(textBox8, index++);
            bindTextBox(textBox9, index++);
            bindTextBox(textBox10, index++);
            bindTextBox(textBox11, index++);
            bindTextBox(textBox12, index++);
            bindTextBox(textBox13, index++);
            bindTextBox(textBox14, index++);
            bindTextBox(textBox15, index++);
            bindTextBox(textBox16, index++);
            bindTextBox(textBox17, index++);
            bindTextBox(textBox18, index++);
            bindTextBox(textBox19, index++);
            bindTextBox(textBox20, index++);
            bindTextBox(textBox21, index++);
            bindTextBox(textBox22, index++);
            bindTextBox(textBox23, index++);
            bindTextBox(textBox24, index++);
            bindTextBox(textBox25, index++);
            bindTextBox(textBox26, index++);
            bindTextBox(textBox27, index++);
            bindTextBox(textBox28, index++);
            bindTextBox(textBox29, index++);
            bindTextBox(textBox30, index++);
            bindTextBox(textBox31, index++);
            bindTextBox(textBox32, index++);
            bindTextBox(textBox33, index++);
            bindTextBox(textBox34, index++);
            bindTextBox(textBox35, index++);
            bindTextBox(textBox36, index++);
            bindTextBox(textBox37, index++);
            bindTextBox(textBox38, index++);
            bindTextBox(textBox39, index++);
            bindTextBox(textBox40, index++);
            bindTextBox(textBox41, index++);
            bindTextBox(textBox42, index++);
            bindTextBox(textBox43, index++);
            bindTextBox(textBox44, index++);
            bindTextBox(textBox45, index++);
            bindTextBox(textBox46, index++);
            bindTextBox(textBox47, index++);
            bindTextBox(textBox48, index++);
            bindTextBox(textBox49, index++);
            bindTextBox(textBox50, index++);
        }

        private void bindTextBox(TextBox textBox, int index)
        {
            //textBox.ReadOnly = true;
            Binding bind = new Binding("Text", device[index] as ModbusVariable<short>, "Value", false, DataSourceUpdateMode.OnValidation);
            bind.Format += Bind_Format;
            bind.Parse += Bind_Parse;

            textBox.DataBindings.Clear();
            textBox.DataBindings.Add(bind);
        }

        private void Bind_Parse(object sender, ConvertEventArgs e)
        {
        }

        private void Bind_Format(object sender, ConvertEventArgs e)
        {
            Invoke((Action)(() => {
                (sender as Binding).Control.Text = e.Value.ToString();
            }));
        }

        public void Start()
        {
            device.Open();
        }
        public void Stop()
        {
            device.Close();
        }
        public void Release()
        {
            device.Dispose();
            device = null;
        }
    }
}
