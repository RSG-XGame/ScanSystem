﻿namespace TestWin
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.testSEDeviceCtrl1 = new TestWin.SETest.TestSEDeviceCtrl();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.testSEDeviceCtrl2 = new TestWin.SETest.TestSEDeviceCtrl();
            this.tabControl1.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.tabPage2.SuspendLayout();
            this.SuspendLayout();
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tabPage1);
            this.tabControl1.Controls.Add(this.tabPage2);
            this.tabControl1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tabControl1.Location = new System.Drawing.Point(0, 0);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(800, 450);
            this.tabControl1.TabIndex = 0;
            // 
            // tabPage1
            // 
            this.tabPage1.Controls.Add(this.testSEDeviceCtrl1);
            this.tabPage1.Location = new System.Drawing.Point(4, 22);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(792, 424);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "tabPage1";
            this.tabPage1.UseVisualStyleBackColor = true;
            // 
            // testSEDeviceCtrl1
            // 
            this.testSEDeviceCtrl1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.testSEDeviceCtrl1.Location = new System.Drawing.Point(3, 3);
            this.testSEDeviceCtrl1.Name = "testSEDeviceCtrl1";
            this.testSEDeviceCtrl1.Size = new System.Drawing.Size(786, 418);
            this.testSEDeviceCtrl1.TabIndex = 1;
            // 
            // tabPage2
            // 
            this.tabPage2.Controls.Add(this.testSEDeviceCtrl2);
            this.tabPage2.Location = new System.Drawing.Point(4, 22);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage2.Size = new System.Drawing.Size(792, 424);
            this.tabPage2.TabIndex = 1;
            this.tabPage2.Text = "tabPage2";
            this.tabPage2.UseVisualStyleBackColor = true;
            // 
            // testSEDeviceCtrl2
            // 
            this.testSEDeviceCtrl2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.testSEDeviceCtrl2.Location = new System.Drawing.Point(3, 3);
            this.testSEDeviceCtrl2.Name = "testSEDeviceCtrl2";
            this.testSEDeviceCtrl2.Size = new System.Drawing.Size(786, 418);
            this.testSEDeviceCtrl2.TabIndex = 1;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tabControl1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.tabControl1.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            this.tabPage2.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tabPage1;
        private SETest.TestSEDeviceCtrl testSEDeviceCtrl1;
        private System.Windows.Forms.TabPage tabPage2;
        private SETest.TestSEDeviceCtrl testSEDeviceCtrl2;
    }
}

