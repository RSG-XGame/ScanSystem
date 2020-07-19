using Newtonsoft.Json;
using OnionApp.Services.Contract.ContractModels;
using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Services.Contract
{
    public class DataResponse : IResponse
    {
        public ResponseResults Result { get; set; }
        public dynamic Data { get; set; }
    }

    public class DataResponse<TType> : DataResponse
    {
        [JsonIgnore]
        public TType Source => (TType)Data;
    }
}
