using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using OnionApp.Services.Contract.ContractModels;
using ScanSystem.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Services.Contract
{
    public class DataRequest : IRequest
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public MainAPITypes APIType { get; set; }
        public dynamic Data { get; set; }
    }

    public class DataRequest<TType> : DataRequest
    {
        [JsonIgnore]
        public TType Source => (TType)Data;
    }
}
