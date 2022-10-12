import * as $protobuf from "protobufjs";
export namespace vrp {

    interface IAmount {
        assetId?: (Uint8Array|null);
        amount?: (Long|null);
    }

    class Amount implements IAmount {
        constructor(p?: vrp.IAmount);
        public assetId: Uint8Array;
        public amount: Long;
        public static encode(m: vrp.IAmount, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Amount;
    }

    interface IBlock {
        header?: (vrp.Block.IHeader|null);
        signature?: (Uint8Array|null);
        transactions?: (vrp.ISignedTransaction[]|null);
    }

    class Block implements IBlock {
        constructor(p?: vrp.IBlock);
        public header?: (vrp.Block.IHeader|null);
        public signature: Uint8Array;
        public transactions: vrp.ISignedTransaction[];
        public static encode(m: vrp.IBlock, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Block;
    }

    namespace Block {

        interface IHeader {
            chainId?: (number|null);
            reference?: (Uint8Array|null);
            baseTarget?: (Long|null);
            generationSignature?: (Uint8Array|null);
            featureVotes?: (number[]|null);
            timestamp?: (Long|null);
            version?: (number|null);
            generator?: (Uint8Array|null);
            rewardVote?: (Long|null);
            rewardBurned?: (Long|null);
            transactionsRoot?: (Uint8Array|null);
        }

        class Header implements IHeader {
            constructor(p?: vrp.Block.IHeader);
            public chainId: number;
            public reference: Uint8Array;
            public baseTarget: Long;
            public generationSignature: Uint8Array;
            public featureVotes: number[];
            public timestamp: Long;
            public version: number;
            public generator: Uint8Array;
            public rewardVote: Long;
            public rewardBurned: Long;
            public transactionsRoot: Uint8Array;
            public static encode(m: vrp.Block.IHeader, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Block.Header;
        }
    }

    interface IMicroBlock {
        version?: (number|null);
        reference?: (Uint8Array|null);
        updatedBlockSignature?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        transactions?: (vrp.ISignedTransaction[]|null);
    }

    class MicroBlock implements IMicroBlock {
        constructor(p?: vrp.IMicroBlock);
        public version: number;
        public reference: Uint8Array;
        public updatedBlockSignature: Uint8Array;
        public senderPublicKey: Uint8Array;
        public transactions: vrp.ISignedTransaction[];
        public static encode(m: vrp.IMicroBlock, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.MicroBlock;
    }

    interface ISignedMicroBlock {
        microBlock?: (vrp.IMicroBlock|null);
        signature?: (Uint8Array|null);
        totalBlockId?: (Uint8Array|null);
    }

    class SignedMicroBlock implements ISignedMicroBlock {
        constructor(p?: vrp.ISignedMicroBlock);
        public microBlock?: (vrp.IMicroBlock|null);
        public signature: Uint8Array;
        public totalBlockId: Uint8Array;
        public static encode(m: vrp.ISignedMicroBlock, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.SignedMicroBlock;
    }

    namespace events {

        interface IBlockchainUpdated {
            id?: (Uint8Array|null);
            height?: (number|null);
            append?: (vrp.events.BlockchainUpdated.IAppend|null);
            rollback?: (vrp.events.BlockchainUpdated.IRollback|null);
            referencedAssets?: (vrp.events.StateUpdate.IAssetInfo[]|null);
        }

        class BlockchainUpdated implements IBlockchainUpdated {
            constructor(p?: vrp.events.IBlockchainUpdated);
            public id: Uint8Array;
            public height: number;
            public append?: (vrp.events.BlockchainUpdated.IAppend|null);
            public rollback?: (vrp.events.BlockchainUpdated.IRollback|null);
            public referencedAssets: vrp.events.StateUpdate.IAssetInfo[];
            public update?: ("append"|"rollback");
            public static encode(m: vrp.events.IBlockchainUpdated, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.BlockchainUpdated;
        }

        namespace BlockchainUpdated {

            interface IAppend {
                block?: (vrp.events.BlockchainUpdated.Append.IBlockAppend|null);
                microBlock?: (vrp.events.BlockchainUpdated.Append.IMicroBlockAppend|null);
                transactionIds?: (Uint8Array[]|null);
                transactionsMetadata?: (vrp.events.ITransactionMetadata[]|null);
                stateUpdate?: (vrp.events.IStateUpdate|null);
                transactionStateUpdates?: (vrp.events.IStateUpdate[]|null);
            }

            class Append implements IAppend {
                constructor(p?: vrp.events.BlockchainUpdated.IAppend);
                public block?: (vrp.events.BlockchainUpdated.Append.IBlockAppend|null);
                public microBlock?: (vrp.events.BlockchainUpdated.Append.IMicroBlockAppend|null);
                public transactionIds: Uint8Array[];
                public transactionsMetadata: vrp.events.ITransactionMetadata[];
                public stateUpdate?: (vrp.events.IStateUpdate|null);
                public transactionStateUpdates: vrp.events.IStateUpdate[];
                public body?: ("block"|"microBlock");
                public static encode(m: vrp.events.BlockchainUpdated.IAppend, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.BlockchainUpdated.Append;
            }

            namespace Append {

                interface IBlockAppend {
                    block?: (vrp.IBlock|null);
                    updatedVrpAmount?: (Long|null);
                }

                class BlockAppend implements IBlockAppend {
                    constructor(p?: vrp.events.BlockchainUpdated.Append.IBlockAppend);
                    public block?: (vrp.IBlock|null);
                    public updatedVrpAmount: Long;
                    public static encode(m: vrp.events.BlockchainUpdated.Append.IBlockAppend, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.BlockchainUpdated.Append.BlockAppend;
                }

                interface IMicroBlockAppend {
                    microBlock?: (vrp.ISignedMicroBlock|null);
                    updatedTransactionsRoot?: (Uint8Array|null);
                }

                class MicroBlockAppend implements IMicroBlockAppend {
                    constructor(p?: vrp.events.BlockchainUpdated.Append.IMicroBlockAppend);
                    public microBlock?: (vrp.ISignedMicroBlock|null);
                    public updatedTransactionsRoot: Uint8Array;
                    public static encode(m: vrp.events.BlockchainUpdated.Append.IMicroBlockAppend, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.BlockchainUpdated.Append.MicroBlockAppend;
                }
            }

            interface IRollback {
                type?: (vrp.events.BlockchainUpdated.Rollback.RollbackType|null);
                removedTransactionIds?: (Uint8Array[]|null);
                removedBlocks?: (vrp.IBlock[]|null);
                rollbackStateUpdate?: (vrp.events.IStateUpdate|null);
            }

            class Rollback implements IRollback {
                constructor(p?: vrp.events.BlockchainUpdated.IRollback);
                public type: vrp.events.BlockchainUpdated.Rollback.RollbackType;
                public removedTransactionIds: Uint8Array[];
                public removedBlocks: vrp.IBlock[];
                public rollbackStateUpdate?: (vrp.events.IStateUpdate|null);
                public static encode(m: vrp.events.BlockchainUpdated.IRollback, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.BlockchainUpdated.Rollback;
            }

            namespace Rollback {

                enum RollbackType {
                    BLOCK = 0,
                    MICROBLOCK = 1
                }
            }
        }

        interface IStateUpdate {
            balances?: (vrp.events.StateUpdate.IBalanceUpdate[]|null);
            leasingForAddress?: (vrp.events.StateUpdate.ILeasingUpdate[]|null);
            dataEntries?: (vrp.events.StateUpdate.IDataEntryUpdate[]|null);
            assets?: (vrp.events.StateUpdate.IAssetStateUpdate[]|null);
            individualLeases?: (vrp.events.StateUpdate.ILeaseUpdate[]|null);
        }

        class StateUpdate implements IStateUpdate {
            constructor(p?: vrp.events.IStateUpdate);
            public balances: vrp.events.StateUpdate.IBalanceUpdate[];
            public leasingForAddress: vrp.events.StateUpdate.ILeasingUpdate[];
            public dataEntries: vrp.events.StateUpdate.IDataEntryUpdate[];
            public assets: vrp.events.StateUpdate.IAssetStateUpdate[];
            public individualLeases: vrp.events.StateUpdate.ILeaseUpdate[];
            public static encode(m: vrp.events.IStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate;
        }

        namespace StateUpdate {

            interface IBalanceUpdate {
                address?: (Uint8Array|null);
                amountAfter?: (vrp.IAmount|null);
                amountBefore?: (Long|null);
            }

            class BalanceUpdate implements IBalanceUpdate {
                constructor(p?: vrp.events.StateUpdate.IBalanceUpdate);
                public address: Uint8Array;
                public amountAfter?: (vrp.IAmount|null);
                public amountBefore: Long;
                public static encode(m: vrp.events.StateUpdate.IBalanceUpdate, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.BalanceUpdate;
            }

            interface ILeasingUpdate {
                address?: (Uint8Array|null);
                inAfter?: (Long|null);
                outAfter?: (Long|null);
                inBefore?: (Long|null);
                outBefore?: (Long|null);
            }

            class LeasingUpdate implements ILeasingUpdate {
                constructor(p?: vrp.events.StateUpdate.ILeasingUpdate);
                public address: Uint8Array;
                public inAfter: Long;
                public outAfter: Long;
                public inBefore: Long;
                public outBefore: Long;
                public static encode(m: vrp.events.StateUpdate.ILeasingUpdate, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.LeasingUpdate;
            }

            interface ILeaseUpdate {
                leaseId?: (Uint8Array|null);
                statusAfter?: (vrp.events.StateUpdate.LeaseUpdate.LeaseStatus|null);
                amount?: (Long|null);
                sender?: (Uint8Array|null);
                recipient?: (Uint8Array|null);
                originTransactionId?: (Uint8Array|null);
            }

            class LeaseUpdate implements ILeaseUpdate {
                constructor(p?: vrp.events.StateUpdate.ILeaseUpdate);
                public leaseId: Uint8Array;
                public statusAfter: vrp.events.StateUpdate.LeaseUpdate.LeaseStatus;
                public amount: Long;
                public sender: Uint8Array;
                public recipient: Uint8Array;
                public originTransactionId: Uint8Array;
                public static encode(m: vrp.events.StateUpdate.ILeaseUpdate, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.LeaseUpdate;
            }

            namespace LeaseUpdate {

                enum LeaseStatus {
                    INACTIVE = 0,
                    ACTIVE = 1
                }
            }

            interface IDataEntryUpdate {
                address?: (Uint8Array|null);
                dataEntry?: (vrp.DataTransactionData.IDataEntry|null);
                dataEntryBefore?: (vrp.DataTransactionData.IDataEntry|null);
            }

            class DataEntryUpdate implements IDataEntryUpdate {
                constructor(p?: vrp.events.StateUpdate.IDataEntryUpdate);
                public address: Uint8Array;
                public dataEntry?: (vrp.DataTransactionData.IDataEntry|null);
                public dataEntryBefore?: (vrp.DataTransactionData.IDataEntry|null);
                public static encode(m: vrp.events.StateUpdate.IDataEntryUpdate, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.DataEntryUpdate;
            }

            interface IAssetStateUpdate {
                before?: (vrp.events.StateUpdate.IAssetDetails|null);
                after?: (vrp.events.StateUpdate.IAssetDetails|null);
            }

            class AssetStateUpdate implements IAssetStateUpdate {
                constructor(p?: vrp.events.StateUpdate.IAssetStateUpdate);
                public before?: (vrp.events.StateUpdate.IAssetDetails|null);
                public after?: (vrp.events.StateUpdate.IAssetDetails|null);
                public static encode(m: vrp.events.StateUpdate.IAssetStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.AssetStateUpdate;
            }

            interface IAssetDetails {
                assetId?: (Uint8Array|null);
                issuer?: (Uint8Array|null);
                decimals?: (number|null);
                name?: (string|null);
                description?: (string|null);
                image?: (string|null);
                reissuable?: (boolean|null);
                volume?: (Long|null);
                scriptInfo?: (vrp.events.StateUpdate.AssetDetails.IAssetScriptInfo|null);
                sponsorship?: (Long|null);
                nft?: (boolean|null);
                lastUpdated?: (number|null);
                safeVolume?: (Uint8Array|null);
            }

            class AssetDetails implements IAssetDetails {
                constructor(p?: vrp.events.StateUpdate.IAssetDetails);
                public assetId: Uint8Array;
                public issuer: Uint8Array;
                public decimals: number;
                public name: string;
                public description: string;
                public image: string;
                public reissuable: boolean;
                public volume: Long;
                public scriptInfo?: (vrp.events.StateUpdate.AssetDetails.IAssetScriptInfo|null);
                public sponsorship: Long;
                public nft: boolean;
                public lastUpdated: number;
                public safeVolume: Uint8Array;
                public static encode(m: vrp.events.StateUpdate.IAssetDetails, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.AssetDetails;
            }

            namespace AssetDetails {

                interface IAssetScriptInfo {
                    script?: (Uint8Array|null);
                    complexity?: (Long|null);
                }

                class AssetScriptInfo implements IAssetScriptInfo {
                    constructor(p?: vrp.events.StateUpdate.AssetDetails.IAssetScriptInfo);
                    public script: Uint8Array;
                    public complexity: Long;
                    public static encode(m: vrp.events.StateUpdate.AssetDetails.IAssetScriptInfo, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.AssetDetails.AssetScriptInfo;
                }
            }

            interface IAssetInfo {
                id?: (Uint8Array|null);
                decimals?: (number|null);
                name?: (string|null);
                image?: (string|null);
            }

            class AssetInfo implements IAssetInfo {
                constructor(p?: vrp.events.StateUpdate.IAssetInfo);
                public id: Uint8Array;
                public decimals: number;
                public name: string;
                public image: string;
                public static encode(m: vrp.events.StateUpdate.IAssetInfo, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.StateUpdate.AssetInfo;
            }
        }

        interface ITransactionMetadata {
            transfer?: (vrp.events.TransactionMetadata.ITransferMetadata|null);
            exchange?: (vrp.events.TransactionMetadata.IExchangeMetadata|null);
            massTransfer?: (vrp.events.TransactionMetadata.IMassTransferMetadata|null);
            invokeScript?: (vrp.events.TransactionMetadata.IInvokeScriptMetadata|null);
            leaseMeta?: (vrp.events.TransactionMetadata.ILeaseMetadata|null);
            ethereum?: (vrp.events.TransactionMetadata.IEthereumMetadata|null);
        }

        class TransactionMetadata implements ITransactionMetadata {
            constructor(p?: vrp.events.ITransactionMetadata);
            public transfer?: (vrp.events.TransactionMetadata.ITransferMetadata|null);
            public exchange?: (vrp.events.TransactionMetadata.IExchangeMetadata|null);
            public massTransfer?: (vrp.events.TransactionMetadata.IMassTransferMetadata|null);
            public invokeScript?: (vrp.events.TransactionMetadata.IInvokeScriptMetadata|null);
            public leaseMeta?: (vrp.events.TransactionMetadata.ILeaseMetadata|null);
            public ethereum?: (vrp.events.TransactionMetadata.IEthereumMetadata|null);
            public metadata?: ("transfer"|"exchange"|"massTransfer"|"invokeScript"|"leaseMeta"|"ethereum");
            public static encode(m: vrp.events.ITransactionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata;
        }

        namespace TransactionMetadata {

            interface ITransferMetadata {
                recipientAddress?: (Uint8Array|null);
            }

            class TransferMetadata implements ITransferMetadata {
                constructor(p?: vrp.events.TransactionMetadata.ITransferMetadata);
                public recipientAddress: Uint8Array;
                public static encode(m: vrp.events.TransactionMetadata.ITransferMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.TransferMetadata;
            }

            interface IMassTransferMetadata {
                recipientsAddresses?: (Uint8Array[]|null);
            }

            class MassTransferMetadata implements IMassTransferMetadata {
                constructor(p?: vrp.events.TransactionMetadata.IMassTransferMetadata);
                public recipientsAddresses: Uint8Array[];
                public static encode(m: vrp.events.TransactionMetadata.IMassTransferMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.MassTransferMetadata;
            }

            interface IExchangeMetadata {
                orderIds?: (Uint8Array[]|null);
                orderSenderAddresses?: (Uint8Array[]|null);
                orderSenderPublicKeys?: (Uint8Array[]|null);
            }

            class ExchangeMetadata implements IExchangeMetadata {
                constructor(p?: vrp.events.TransactionMetadata.IExchangeMetadata);
                public orderIds: Uint8Array[];
                public orderSenderAddresses: Uint8Array[];
                public orderSenderPublicKeys: Uint8Array[];
                public static encode(m: vrp.events.TransactionMetadata.IExchangeMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.ExchangeMetadata;
            }

            interface IInvokeScriptMetadata {
                dAppAddress?: (Uint8Array|null);
                functionName?: (string|null);
                "arguments"?: (vrp.InvokeScriptResult.Call.IArgument[]|null);
                payments?: (vrp.IAmount[]|null);
                result?: (vrp.IInvokeScriptResult|null);
            }

            class InvokeScriptMetadata implements IInvokeScriptMetadata {
                constructor(p?: vrp.events.TransactionMetadata.IInvokeScriptMetadata);
                public dAppAddress: Uint8Array;
                public functionName: string;
                public arguments: vrp.InvokeScriptResult.Call.IArgument[];
                public payments: vrp.IAmount[];
                public result?: (vrp.IInvokeScriptResult|null);
                public static encode(m: vrp.events.TransactionMetadata.IInvokeScriptMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.InvokeScriptMetadata;
            }

            namespace InvokeScriptMetadata {

                interface IArgument {
                    integerValue?: (Long|null);
                    binaryValue?: (Uint8Array|null);
                    stringValue?: (string|null);
                    booleanValue?: (boolean|null);
                    list?: (vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.IList|null);
                }

                class Argument implements IArgument {
                    constructor(p?: vrp.events.TransactionMetadata.InvokeScriptMetadata.IArgument);
                    public integerValue?: (Long|null);
                    public binaryValue?: (Uint8Array|null);
                    public stringValue?: (string|null);
                    public booleanValue?: (boolean|null);
                    public list?: (vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.IList|null);
                    public value?: ("integerValue"|"binaryValue"|"stringValue"|"booleanValue"|"list");
                    public static encode(m: vrp.events.TransactionMetadata.InvokeScriptMetadata.IArgument, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument;
                }

                namespace Argument {

                    interface IList {
                        items?: (vrp.events.TransactionMetadata.InvokeScriptMetadata.IArgument[]|null);
                    }

                    class List implements IList {
                        constructor(p?: vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.IList);
                        public items: vrp.events.TransactionMetadata.InvokeScriptMetadata.IArgument[];
                        public static encode(m: vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.IList, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.List;
                    }
                }
            }

            interface ILeaseMetadata {
                recipientAddress?: (Uint8Array|null);
            }

            class LeaseMetadata implements ILeaseMetadata {
                constructor(p?: vrp.events.TransactionMetadata.ILeaseMetadata);
                public recipientAddress: Uint8Array;
                public static encode(m: vrp.events.TransactionMetadata.ILeaseMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.LeaseMetadata;
            }

            interface IEthereumTransferMetadata {
                recipientAddress?: (Uint8Array|null);
                amount?: (vrp.IAmount|null);
            }

            class EthereumTransferMetadata implements IEthereumTransferMetadata {
                constructor(p?: vrp.events.TransactionMetadata.IEthereumTransferMetadata);
                public recipientAddress: Uint8Array;
                public amount?: (vrp.IAmount|null);
                public static encode(m: vrp.events.TransactionMetadata.IEthereumTransferMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.EthereumTransferMetadata;
            }

            interface IEthereumMetadata {
                timestamp?: (Long|null);
                fee?: (Long|null);
                senderPublicKey?: (Uint8Array|null);
                transfer?: (vrp.events.TransactionMetadata.IEthereumTransferMetadata|null);
                invoke?: (vrp.events.TransactionMetadata.IInvokeScriptMetadata|null);
            }

            class EthereumMetadata implements IEthereumMetadata {
                constructor(p?: vrp.events.TransactionMetadata.IEthereumMetadata);
                public timestamp: Long;
                public fee: Long;
                public senderPublicKey: Uint8Array;
                public transfer?: (vrp.events.TransactionMetadata.IEthereumTransferMetadata|null);
                public invoke?: (vrp.events.TransactionMetadata.IInvokeScriptMetadata|null);
                public Action?: ("transfer"|"invoke");
                public static encode(m: vrp.events.TransactionMetadata.IEthereumMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.TransactionMetadata.EthereumMetadata;
            }
        }

        namespace grpc {

            class BlockchainUpdatesApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getBlockUpdate(request: vrp.events.grpc.IGetBlockUpdateRequest, callback: vrp.events.grpc.BlockchainUpdatesApi.GetBlockUpdateCallback): void;
                public getBlockUpdate(request: vrp.events.grpc.IGetBlockUpdateRequest): Promise<vrp.events.grpc.GetBlockUpdateResponse>;
                public getBlockUpdatesRange(request: vrp.events.grpc.IGetBlockUpdatesRangeRequest, callback: vrp.events.grpc.BlockchainUpdatesApi.GetBlockUpdatesRangeCallback): void;
                public getBlockUpdatesRange(request: vrp.events.grpc.IGetBlockUpdatesRangeRequest): Promise<vrp.events.grpc.GetBlockUpdatesRangeResponse>;
                public subscribe(request: vrp.events.grpc.ISubscribeRequest, callback: vrp.events.grpc.BlockchainUpdatesApi.SubscribeCallback): void;
                public subscribe(request: vrp.events.grpc.ISubscribeRequest): Promise<vrp.events.grpc.SubscribeEvent>;
            }

            namespace BlockchainUpdatesApi {

                type GetBlockUpdateCallback = (error: (Error|null), response?: vrp.events.grpc.GetBlockUpdateResponse) => void;

                type GetBlockUpdatesRangeCallback = (error: (Error|null), response?: vrp.events.grpc.GetBlockUpdatesRangeResponse) => void;

                type SubscribeCallback = (error: (Error|null), response?: vrp.events.grpc.SubscribeEvent) => void;
            }

            interface IGetBlockUpdateRequest {
                height?: (number|null);
            }

            class GetBlockUpdateRequest implements IGetBlockUpdateRequest {
                constructor(p?: vrp.events.grpc.IGetBlockUpdateRequest);
                public height: number;
                public static encode(m: vrp.events.grpc.IGetBlockUpdateRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.GetBlockUpdateRequest;
            }

            interface IGetBlockUpdateResponse {
                update?: (vrp.events.IBlockchainUpdated|null);
            }

            class GetBlockUpdateResponse implements IGetBlockUpdateResponse {
                constructor(p?: vrp.events.grpc.IGetBlockUpdateResponse);
                public update?: (vrp.events.IBlockchainUpdated|null);
                public static encode(m: vrp.events.grpc.IGetBlockUpdateResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.GetBlockUpdateResponse;
            }

            interface IGetBlockUpdatesRangeRequest {
                fromHeight?: (number|null);
                toHeight?: (number|null);
            }

            class GetBlockUpdatesRangeRequest implements IGetBlockUpdatesRangeRequest {
                constructor(p?: vrp.events.grpc.IGetBlockUpdatesRangeRequest);
                public fromHeight: number;
                public toHeight: number;
                public static encode(m: vrp.events.grpc.IGetBlockUpdatesRangeRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.GetBlockUpdatesRangeRequest;
            }

            interface IGetBlockUpdatesRangeResponse {
                updates?: (vrp.events.IBlockchainUpdated[]|null);
            }

            class GetBlockUpdatesRangeResponse implements IGetBlockUpdatesRangeResponse {
                constructor(p?: vrp.events.grpc.IGetBlockUpdatesRangeResponse);
                public updates: vrp.events.IBlockchainUpdated[];
                public static encode(m: vrp.events.grpc.IGetBlockUpdatesRangeResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.GetBlockUpdatesRangeResponse;
            }

            interface ISubscribeRequest {
                fromHeight?: (number|null);
                toHeight?: (number|null);
            }

            class SubscribeRequest implements ISubscribeRequest {
                constructor(p?: vrp.events.grpc.ISubscribeRequest);
                public fromHeight: number;
                public toHeight: number;
                public static encode(m: vrp.events.grpc.ISubscribeRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.SubscribeRequest;
            }

            interface ISubscribeEvent {
                update?: (vrp.events.IBlockchainUpdated|null);
            }

            class SubscribeEvent implements ISubscribeEvent {
                constructor(p?: vrp.events.grpc.ISubscribeEvent);
                public update?: (vrp.events.IBlockchainUpdated|null);
                public static encode(m: vrp.events.grpc.ISubscribeEvent, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.events.grpc.SubscribeEvent;
            }
        }
    }

    interface IInvokeScriptResult {
        data?: (vrp.DataTransactionData.IDataEntry[]|null);
        transfers?: (vrp.InvokeScriptResult.IPayment[]|null);
        issues?: (vrp.InvokeScriptResult.IIssue[]|null);
        reissues?: (vrp.InvokeScriptResult.IReissue[]|null);
        burns?: (vrp.InvokeScriptResult.IBurn[]|null);
        errorMessage?: (vrp.InvokeScriptResult.IErrorMessage|null);
        sponsorFees?: (vrp.InvokeScriptResult.ISponsorFee[]|null);
        leases?: (vrp.InvokeScriptResult.ILease[]|null);
        leaseCancels?: (vrp.InvokeScriptResult.ILeaseCancel[]|null);
        invokes?: (vrp.InvokeScriptResult.IInvocation[]|null);
        privatePayment?: (vrp.InvokeScriptResult.IPrivatePayment[]|null);
    }

    class InvokeScriptResult implements IInvokeScriptResult {
        constructor(p?: vrp.IInvokeScriptResult);
        public data: vrp.DataTransactionData.IDataEntry[];
        public transfers: vrp.InvokeScriptResult.IPayment[];
        public issues: vrp.InvokeScriptResult.IIssue[];
        public reissues: vrp.InvokeScriptResult.IReissue[];
        public burns: vrp.InvokeScriptResult.IBurn[];
        public errorMessage?: (vrp.InvokeScriptResult.IErrorMessage|null);
        public sponsorFees: vrp.InvokeScriptResult.ISponsorFee[];
        public leases: vrp.InvokeScriptResult.ILease[];
        public leaseCancels: vrp.InvokeScriptResult.ILeaseCancel[];
        public invokes: vrp.InvokeScriptResult.IInvocation[];
        public privatePayment: vrp.InvokeScriptResult.IPrivatePayment[];
        public static encode(m: vrp.IInvokeScriptResult, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult;
    }

    namespace InvokeScriptResult {

        interface IPayment {
            address?: (Uint8Array|null);
            amount?: (vrp.IAmount|null);
        }

        class Payment implements IPayment {
            constructor(p?: vrp.InvokeScriptResult.IPayment);
            public address: Uint8Array;
            public amount?: (vrp.IAmount|null);
            public static encode(m: vrp.InvokeScriptResult.IPayment, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Payment;
        }

        interface IPrivatePayment {
            address?: (Uint8Array|null);
            amount?: (vrp.IAmount|null);
        }

        class PrivatePayment implements IPrivatePayment {
            constructor(p?: vrp.InvokeScriptResult.IPrivatePayment);
            public address: Uint8Array;
            public amount?: (vrp.IAmount|null);
            public static encode(m: vrp.InvokeScriptResult.IPrivatePayment, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.PrivatePayment;
        }

        interface IIssue {
            assetId?: (Uint8Array|null);
            name?: (string|null);
            description?: (string|null);
            image?: (string|null);
            amount?: (Long|null);
            decimals?: (number|null);
            reissuable?: (boolean|null);
            script?: (Uint8Array|null);
            nonce?: (Long|null);
        }

        class Issue implements IIssue {
            constructor(p?: vrp.InvokeScriptResult.IIssue);
            public assetId: Uint8Array;
            public name: string;
            public description: string;
            public image: string;
            public amount: Long;
            public decimals: number;
            public reissuable: boolean;
            public script: Uint8Array;
            public nonce: Long;
            public static encode(m: vrp.InvokeScriptResult.IIssue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Issue;
        }

        interface IReissue {
            assetId?: (Uint8Array|null);
            amount?: (Long|null);
            isReissuable?: (boolean|null);
        }

        class Reissue implements IReissue {
            constructor(p?: vrp.InvokeScriptResult.IReissue);
            public assetId: Uint8Array;
            public amount: Long;
            public isReissuable: boolean;
            public static encode(m: vrp.InvokeScriptResult.IReissue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Reissue;
        }

        interface IBurn {
            assetId?: (Uint8Array|null);
            amount?: (Long|null);
        }

        class Burn implements IBurn {
            constructor(p?: vrp.InvokeScriptResult.IBurn);
            public assetId: Uint8Array;
            public amount: Long;
            public static encode(m: vrp.InvokeScriptResult.IBurn, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Burn;
        }

        interface ISponsorFee {
            minFee?: (vrp.IAmount|null);
        }

        class SponsorFee implements ISponsorFee {
            constructor(p?: vrp.InvokeScriptResult.ISponsorFee);
            public minFee?: (vrp.IAmount|null);
            public static encode(m: vrp.InvokeScriptResult.ISponsorFee, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.SponsorFee;
        }

        interface ILease {
            recipient?: (vrp.IRecipient|null);
            amount?: (Long|null);
            nonce?: (Long|null);
            leaseId?: (Uint8Array|null);
        }

        class Lease implements ILease {
            constructor(p?: vrp.InvokeScriptResult.ILease);
            public recipient?: (vrp.IRecipient|null);
            public amount: Long;
            public nonce: Long;
            public leaseId: Uint8Array;
            public static encode(m: vrp.InvokeScriptResult.ILease, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Lease;
        }

        interface ILeaseCancel {
            leaseId?: (Uint8Array|null);
        }

        class LeaseCancel implements ILeaseCancel {
            constructor(p?: vrp.InvokeScriptResult.ILeaseCancel);
            public leaseId: Uint8Array;
            public static encode(m: vrp.InvokeScriptResult.ILeaseCancel, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.LeaseCancel;
        }

        interface IErrorMessage {
            code?: (number|null);
            text?: (string|null);
        }

        class ErrorMessage implements IErrorMessage {
            constructor(p?: vrp.InvokeScriptResult.IErrorMessage);
            public code: number;
            public text: string;
            public static encode(m: vrp.InvokeScriptResult.IErrorMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.ErrorMessage;
        }

        interface ICall {
            "function"?: (string|null);
            argsBytes?: (Uint8Array[]|null);
            args?: (vrp.InvokeScriptResult.Call.IArgument[]|null);
        }

        class Call implements ICall {
            constructor(p?: vrp.InvokeScriptResult.ICall);
            public function: string;
            public argsBytes: Uint8Array[];
            public args: vrp.InvokeScriptResult.Call.IArgument[];
            public static encode(m: vrp.InvokeScriptResult.ICall, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Call;
        }

        namespace Call {

            interface IArgument {
                integerValue?: (Long|null);
                binaryValue?: (Uint8Array|null);
                stringValue?: (string|null);
                booleanValue?: (boolean|null);
                caseObj?: (Uint8Array|null);
                list?: (vrp.InvokeScriptResult.Call.Argument.IList|null);
            }

            class Argument implements IArgument {
                constructor(p?: vrp.InvokeScriptResult.Call.IArgument);
                public integerValue?: (Long|null);
                public binaryValue?: (Uint8Array|null);
                public stringValue?: (string|null);
                public booleanValue?: (boolean|null);
                public caseObj?: (Uint8Array|null);
                public list?: (vrp.InvokeScriptResult.Call.Argument.IList|null);
                public value?: ("integerValue"|"binaryValue"|"stringValue"|"booleanValue"|"caseObj"|"list");
                public static encode(m: vrp.InvokeScriptResult.Call.IArgument, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Call.Argument;
            }

            namespace Argument {

                interface IList {
                    items?: (vrp.InvokeScriptResult.Call.IArgument[]|null);
                }

                class List implements IList {
                    constructor(p?: vrp.InvokeScriptResult.Call.Argument.IList);
                    public items: vrp.InvokeScriptResult.Call.IArgument[];
                    public static encode(m: vrp.InvokeScriptResult.Call.Argument.IList, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Call.Argument.List;
                }
            }
        }

        interface IInvocation {
            dApp?: (Uint8Array|null);
            call?: (vrp.InvokeScriptResult.ICall|null);
            payments?: (vrp.IAmount[]|null);
            stateChanges?: (vrp.IInvokeScriptResult|null);
        }

        class Invocation implements IInvocation {
            constructor(p?: vrp.InvokeScriptResult.IInvocation);
            public dApp: Uint8Array;
            public call?: (vrp.InvokeScriptResult.ICall|null);
            public payments: vrp.IAmount[];
            public stateChanges?: (vrp.IInvokeScriptResult|null);
            public static encode(m: vrp.InvokeScriptResult.IInvocation, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptResult.Invocation;
        }
    }

    namespace node {

        namespace grpc {

            class AccountsApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getBalances(request: vrp.node.grpc.IBalancesRequest, callback: vrp.node.grpc.AccountsApi.GetBalancesCallback): void;
                public getBalances(request: vrp.node.grpc.IBalancesRequest): Promise<vrp.node.grpc.BalanceResponse>;
                public getScript(request: vrp.node.grpc.IAccountRequest, callback: vrp.node.grpc.AccountsApi.GetScriptCallback): void;
                public getScript(request: vrp.node.grpc.IAccountRequest): Promise<vrp.node.grpc.ScriptData>;
                public getActiveLeases(request: vrp.node.grpc.IAccountRequest, callback: vrp.node.grpc.AccountsApi.GetActiveLeasesCallback): void;
                public getActiveLeases(request: vrp.node.grpc.IAccountRequest): Promise<vrp.node.grpc.LeaseResponse>;
                public getDataEntries(request: vrp.node.grpc.IDataRequest, callback: vrp.node.grpc.AccountsApi.GetDataEntriesCallback): void;
                public getDataEntries(request: vrp.node.grpc.IDataRequest): Promise<vrp.node.grpc.DataEntryResponse>;
                public resolveAlias(request: google.protobuf.IStringValue, callback: vrp.node.grpc.AccountsApi.ResolveAliasCallback): void;
                public resolveAlias(request: google.protobuf.IStringValue): Promise<google.protobuf.BytesValue>;
            }

            namespace AccountsApi {

                type GetBalancesCallback = (error: (Error|null), response?: vrp.node.grpc.BalanceResponse) => void;

                type GetScriptCallback = (error: (Error|null), response?: vrp.node.grpc.ScriptData) => void;

                type GetActiveLeasesCallback = (error: (Error|null), response?: vrp.node.grpc.LeaseResponse) => void;

                type GetDataEntriesCallback = (error: (Error|null), response?: vrp.node.grpc.DataEntryResponse) => void;

                type ResolveAliasCallback = (error: (Error|null), response?: google.protobuf.BytesValue) => void;
            }

            interface IAccountRequest {
                address?: (Uint8Array|null);
            }

            class AccountRequest implements IAccountRequest {
                constructor(p?: vrp.node.grpc.IAccountRequest);
                public address: Uint8Array;
                public static encode(m: vrp.node.grpc.IAccountRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.AccountRequest;
            }

            interface IDataRequest {
                address?: (Uint8Array|null);
                key?: (string|null);
            }

            class DataRequest implements IDataRequest {
                constructor(p?: vrp.node.grpc.IDataRequest);
                public address: Uint8Array;
                public key: string;
                public static encode(m: vrp.node.grpc.IDataRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.DataRequest;
            }

            interface IBalancesRequest {
                address?: (Uint8Array|null);
                assets?: (Uint8Array[]|null);
            }

            class BalancesRequest implements IBalancesRequest {
                constructor(p?: vrp.node.grpc.IBalancesRequest);
                public address: Uint8Array;
                public assets: Uint8Array[];
                public static encode(m: vrp.node.grpc.IBalancesRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BalancesRequest;
            }

            interface IBalanceResponse {
                vrp?: (vrp.node.grpc.BalanceResponse.IVRPBalances|null);
                asset?: (vrp.IAmount|null);
            }

            class BalanceResponse implements IBalanceResponse {
                constructor(p?: vrp.node.grpc.IBalanceResponse);
                public vrp?: (vrp.node.grpc.BalanceResponse.IVRPBalances|null);
                public asset?: (vrp.IAmount|null);
                public balance?: ("vrp"|"asset");
                public static encode(m: vrp.node.grpc.IBalanceResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BalanceResponse;
            }

            namespace BalanceResponse {

                interface IVRPBalances {
                    regular?: (Long|null);
                    generating?: (Long|null);
                    available?: (Long|null);
                    effective?: (Long|null);
                    leaseIn?: (Long|null);
                    leaseOut?: (Long|null);
                }

                class VRPBalances implements IVRPBalances {
                    constructor(p?: vrp.node.grpc.BalanceResponse.IVRPBalances);
                    public regular: Long;
                    public generating: Long;
                    public available: Long;
                    public effective: Long;
                    public leaseIn: Long;
                    public leaseOut: Long;
                    public static encode(m: vrp.node.grpc.BalanceResponse.IVRPBalances, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BalanceResponse.VRPBalances;
                }
            }

            interface IDataEntryResponse {
                address?: (Uint8Array|null);
                entry?: (vrp.DataTransactionData.IDataEntry|null);
            }

            class DataEntryResponse implements IDataEntryResponse {
                constructor(p?: vrp.node.grpc.IDataEntryResponse);
                public address: Uint8Array;
                public entry?: (vrp.DataTransactionData.IDataEntry|null);
                public static encode(m: vrp.node.grpc.IDataEntryResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.DataEntryResponse;
            }

            interface IScriptData {
                scriptBytes?: (Uint8Array|null);
                scriptText?: (string|null);
                complexity?: (Long|null);
            }

            class ScriptData implements IScriptData {
                constructor(p?: vrp.node.grpc.IScriptData);
                public scriptBytes: Uint8Array;
                public scriptText: string;
                public complexity: Long;
                public static encode(m: vrp.node.grpc.IScriptData, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.ScriptData;
            }

            interface ILeaseResponse {
                leaseId?: (Uint8Array|null);
                originTransactionId?: (Uint8Array|null);
                sender?: (Uint8Array|null);
                recipient?: (vrp.IRecipient|null);
                amount?: (Long|null);
                height?: (Long|null);
            }

            class LeaseResponse implements ILeaseResponse {
                constructor(p?: vrp.node.grpc.ILeaseResponse);
                public leaseId: Uint8Array;
                public originTransactionId: Uint8Array;
                public sender: Uint8Array;
                public recipient?: (vrp.IRecipient|null);
                public amount: Long;
                public height: Long;
                public static encode(m: vrp.node.grpc.ILeaseResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.LeaseResponse;
            }

            class AssetsApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getInfo(request: vrp.node.grpc.IAssetRequest, callback: vrp.node.grpc.AssetsApi.GetInfoCallback): void;
                public getInfo(request: vrp.node.grpc.IAssetRequest): Promise<vrp.node.grpc.AssetInfoResponse>;
                public getNFTList(request: vrp.node.grpc.INFTRequest, callback: vrp.node.grpc.AssetsApi.GetNFTListCallback): void;
                public getNFTList(request: vrp.node.grpc.INFTRequest): Promise<vrp.node.grpc.NFTResponse>;
            }

            namespace AssetsApi {

                type GetInfoCallback = (error: (Error|null), response?: vrp.node.grpc.AssetInfoResponse) => void;

                type GetNFTListCallback = (error: (Error|null), response?: vrp.node.grpc.NFTResponse) => void;
            }

            interface IAssetRequest {
                assetId?: (Uint8Array|null);
            }

            class AssetRequest implements IAssetRequest {
                constructor(p?: vrp.node.grpc.IAssetRequest);
                public assetId: Uint8Array;
                public static encode(m: vrp.node.grpc.IAssetRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.AssetRequest;
            }

            interface INFTRequest {
                address?: (Uint8Array|null);
                limit?: (number|null);
                afterAssetId?: (Uint8Array|null);
            }

            class NFTRequest implements INFTRequest {
                constructor(p?: vrp.node.grpc.INFTRequest);
                public address: Uint8Array;
                public limit: number;
                public afterAssetId: Uint8Array;
                public static encode(m: vrp.node.grpc.INFTRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.NFTRequest;
            }

            interface INFTResponse {
                assetId?: (Uint8Array|null);
                assetInfo?: (vrp.node.grpc.IAssetInfoResponse|null);
            }

            class NFTResponse implements INFTResponse {
                constructor(p?: vrp.node.grpc.INFTResponse);
                public assetId: Uint8Array;
                public assetInfo?: (vrp.node.grpc.IAssetInfoResponse|null);
                public static encode(m: vrp.node.grpc.INFTResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.NFTResponse;
            }

            interface IAssetInfoResponse {
                issuer?: (Uint8Array|null);
                name?: (string|null);
                description?: (string|null);
                decimals?: (number|null);
                reissuable?: (boolean|null);
                totalVolume?: (Long|null);
                script?: (vrp.node.grpc.IScriptData|null);
                sponsorship?: (Long|null);
                issueTransaction?: (vrp.ISignedTransaction|null);
                sponsorBalance?: (Long|null);
                image?: (string|null);
            }

            class AssetInfoResponse implements IAssetInfoResponse {
                constructor(p?: vrp.node.grpc.IAssetInfoResponse);
                public issuer: Uint8Array;
                public name: string;
                public description: string;
                public decimals: number;
                public reissuable: boolean;
                public totalVolume: Long;
                public script?: (vrp.node.grpc.IScriptData|null);
                public sponsorship: Long;
                public issueTransaction?: (vrp.ISignedTransaction|null);
                public sponsorBalance: Long;
                public image: string;
                public static encode(m: vrp.node.grpc.IAssetInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.AssetInfoResponse;
            }

            class BlockchainApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getActivationStatus(request: vrp.node.grpc.IActivationStatusRequest, callback: vrp.node.grpc.BlockchainApi.GetActivationStatusCallback): void;
                public getActivationStatus(request: vrp.node.grpc.IActivationStatusRequest): Promise<vrp.node.grpc.ActivationStatusResponse>;
                public getBaseTarget(request: google.protobuf.IEmpty, callback: vrp.node.grpc.BlockchainApi.GetBaseTargetCallback): void;
                public getBaseTarget(request: google.protobuf.IEmpty): Promise<vrp.node.grpc.BaseTargetResponse>;
                public getCumulativeScore(request: google.protobuf.IEmpty, callback: vrp.node.grpc.BlockchainApi.GetCumulativeScoreCallback): void;
                public getCumulativeScore(request: google.protobuf.IEmpty): Promise<vrp.node.grpc.ScoreResponse>;
            }

            namespace BlockchainApi {

                type GetActivationStatusCallback = (error: (Error|null), response?: vrp.node.grpc.ActivationStatusResponse) => void;

                type GetBaseTargetCallback = (error: (Error|null), response?: vrp.node.grpc.BaseTargetResponse) => void;

                type GetCumulativeScoreCallback = (error: (Error|null), response?: vrp.node.grpc.ScoreResponse) => void;
            }

            interface IActivationStatusRequest {
                height?: (number|null);
            }

            class ActivationStatusRequest implements IActivationStatusRequest {
                constructor(p?: vrp.node.grpc.IActivationStatusRequest);
                public height: number;
                public static encode(m: vrp.node.grpc.IActivationStatusRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.ActivationStatusRequest;
            }

            interface IActivationStatusResponse {
                height?: (number|null);
                votingInterval?: (number|null);
                votingThreshold?: (number|null);
                nextCheck?: (number|null);
                features?: (vrp.node.grpc.IFeatureActivationStatus[]|null);
            }

            class ActivationStatusResponse implements IActivationStatusResponse {
                constructor(p?: vrp.node.grpc.IActivationStatusResponse);
                public height: number;
                public votingInterval: number;
                public votingThreshold: number;
                public nextCheck: number;
                public features: vrp.node.grpc.IFeatureActivationStatus[];
                public static encode(m: vrp.node.grpc.IActivationStatusResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.ActivationStatusResponse;
            }

            interface IFeatureActivationStatus {
                id?: (number|null);
                description?: (string|null);
                blockchainStatus?: (vrp.node.grpc.FeatureActivationStatus.BlockchainFeatureStatus|null);
                nodeStatus?: (vrp.node.grpc.FeatureActivationStatus.NodeFeatureStatus|null);
                activationHeight?: (number|null);
                supportingBlocks?: (number|null);
            }

            class FeatureActivationStatus implements IFeatureActivationStatus {
                constructor(p?: vrp.node.grpc.IFeatureActivationStatus);
                public id: number;
                public description: string;
                public blockchainStatus: vrp.node.grpc.FeatureActivationStatus.BlockchainFeatureStatus;
                public nodeStatus: vrp.node.grpc.FeatureActivationStatus.NodeFeatureStatus;
                public activationHeight: number;
                public supportingBlocks: number;
                public static encode(m: vrp.node.grpc.IFeatureActivationStatus, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.FeatureActivationStatus;
            }

            namespace FeatureActivationStatus {

                enum BlockchainFeatureStatus {
                    UNDEFINED = 0,
                    APPROVED = 1,
                    ACTIVATED = 2
                }

                enum NodeFeatureStatus {
                    NOT_IMPLEMENTED = 0,
                    IMPLEMENTED = 1,
                    VOTED = 2
                }
            }

            interface IBaseTargetResponse {
                baseTarget?: (Long|null);
            }

            class BaseTargetResponse implements IBaseTargetResponse {
                constructor(p?: vrp.node.grpc.IBaseTargetResponse);
                public baseTarget: Long;
                public static encode(m: vrp.node.grpc.IBaseTargetResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BaseTargetResponse;
            }

            interface IScoreResponse {
                score?: (Uint8Array|null);
            }

            class ScoreResponse implements IScoreResponse {
                constructor(p?: vrp.node.grpc.IScoreResponse);
                public score: Uint8Array;
                public static encode(m: vrp.node.grpc.IScoreResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.ScoreResponse;
            }

            class BlocksApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getBlock(request: vrp.node.grpc.IBlockRequest, callback: vrp.node.grpc.BlocksApi.GetBlockCallback): void;
                public getBlock(request: vrp.node.grpc.IBlockRequest): Promise<vrp.node.grpc.BlockWithHeight>;
                public getBlockRange(request: vrp.node.grpc.IBlockRangeRequest, callback: vrp.node.grpc.BlocksApi.GetBlockRangeCallback): void;
                public getBlockRange(request: vrp.node.grpc.IBlockRangeRequest): Promise<vrp.node.grpc.BlockWithHeight>;
                public getCurrentHeight(request: google.protobuf.IEmpty, callback: vrp.node.grpc.BlocksApi.GetCurrentHeightCallback): void;
                public getCurrentHeight(request: google.protobuf.IEmpty): Promise<google.protobuf.UInt32Value>;
            }

            namespace BlocksApi {

                type GetBlockCallback = (error: (Error|null), response?: vrp.node.grpc.BlockWithHeight) => void;

                type GetBlockRangeCallback = (error: (Error|null), response?: vrp.node.grpc.BlockWithHeight) => void;

                type GetCurrentHeightCallback = (error: (Error|null), response?: google.protobuf.UInt32Value) => void;
            }

            interface IBlockRequest {
                blockId?: (Uint8Array|null);
                height?: (number|null);
                reference?: (Uint8Array|null);
                includeTransactions?: (boolean|null);
            }

            class BlockRequest implements IBlockRequest {
                constructor(p?: vrp.node.grpc.IBlockRequest);
                public blockId?: (Uint8Array|null);
                public height?: (number|null);
                public reference?: (Uint8Array|null);
                public includeTransactions: boolean;
                public request?: ("blockId"|"height"|"reference");
                public static encode(m: vrp.node.grpc.IBlockRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BlockRequest;
            }

            interface IBlockRangeRequest {
                fromHeight?: (number|null);
                toHeight?: (number|null);
                generatorPublicKey?: (Uint8Array|null);
                generatorAddress?: (Uint8Array|null);
                includeTransactions?: (boolean|null);
            }

            class BlockRangeRequest implements IBlockRangeRequest {
                constructor(p?: vrp.node.grpc.IBlockRangeRequest);
                public fromHeight: number;
                public toHeight: number;
                public generatorPublicKey?: (Uint8Array|null);
                public generatorAddress?: (Uint8Array|null);
                public includeTransactions: boolean;
                public filter?: ("generatorPublicKey"|"generatorAddress");
                public static encode(m: vrp.node.grpc.IBlockRangeRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BlockRangeRequest;
            }

            interface IBlockWithHeight {
                block?: (vrp.IBlock|null);
                height?: (number|null);
            }

            class BlockWithHeight implements IBlockWithHeight {
                constructor(p?: vrp.node.grpc.IBlockWithHeight);
                public block?: (vrp.IBlock|null);
                public height: number;
                public static encode(m: vrp.node.grpc.IBlockWithHeight, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.BlockWithHeight;
            }

            class TransactionsApi extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public getTransactions(request: vrp.node.grpc.ITransactionsRequest, callback: vrp.node.grpc.TransactionsApi.GetTransactionsCallback): void;
                public getTransactions(request: vrp.node.grpc.ITransactionsRequest): Promise<vrp.node.grpc.TransactionResponse>;
                public getStateChanges(request: vrp.node.grpc.ITransactionsRequest, callback: vrp.node.grpc.TransactionsApi.GetStateChangesCallback): void;
                public getStateChanges(request: vrp.node.grpc.ITransactionsRequest): Promise<vrp.node.grpc.InvokeScriptResultResponse>;
                public getStatuses(request: vrp.node.grpc.ITransactionsByIdRequest, callback: vrp.node.grpc.TransactionsApi.GetStatusesCallback): void;
                public getStatuses(request: vrp.node.grpc.ITransactionsByIdRequest): Promise<vrp.node.grpc.TransactionStatus>;
                public getUnconfirmed(request: vrp.node.grpc.ITransactionsRequest, callback: vrp.node.grpc.TransactionsApi.GetUnconfirmedCallback): void;
                public getUnconfirmed(request: vrp.node.grpc.ITransactionsRequest): Promise<vrp.node.grpc.TransactionResponse>;
                public sign(request: vrp.node.grpc.ISignRequest, callback: vrp.node.grpc.TransactionsApi.SignCallback): void;
                public sign(request: vrp.node.grpc.ISignRequest): Promise<vrp.SignedTransaction>;
                public broadcast(request: vrp.ISignedTransaction, callback: vrp.node.grpc.TransactionsApi.BroadcastCallback): void;
                public broadcast(request: vrp.ISignedTransaction): Promise<vrp.SignedTransaction>;
            }

            namespace TransactionsApi {

                type GetTransactionsCallback = (error: (Error|null), response?: vrp.node.grpc.TransactionResponse) => void;

                type GetStateChangesCallback = (error: (Error|null), response?: vrp.node.grpc.InvokeScriptResultResponse) => void;

                type GetStatusesCallback = (error: (Error|null), response?: vrp.node.grpc.TransactionStatus) => void;

                type GetUnconfirmedCallback = (error: (Error|null), response?: vrp.node.grpc.TransactionResponse) => void;

                type SignCallback = (error: (Error|null), response?: vrp.SignedTransaction) => void;

                type BroadcastCallback = (error: (Error|null), response?: vrp.SignedTransaction) => void;
            }

            enum ApplicationStatus {
                UNKNOWN = 0,
                SUCCEEDED = 1,
                SCRIPT_EXECUTION_FAILED = 2
            }

            interface ITransactionStatus {
                id?: (Uint8Array|null);
                status?: (vrp.node.grpc.TransactionStatus.Status|null);
                height?: (Long|null);
                applicationStatus?: (vrp.node.grpc.ApplicationStatus|null);
            }

            class TransactionStatus implements ITransactionStatus {
                constructor(p?: vrp.node.grpc.ITransactionStatus);
                public id: Uint8Array;
                public status: vrp.node.grpc.TransactionStatus.Status;
                public height: Long;
                public applicationStatus: vrp.node.grpc.ApplicationStatus;
                public static encode(m: vrp.node.grpc.ITransactionStatus, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.TransactionStatus;
            }

            namespace TransactionStatus {

                enum Status {
                    NOT_EXISTS = 0,
                    UNCONFIRMED = 1,
                    CONFIRMED = 2
                }
            }

            interface ITransactionResponse {
                id?: (Uint8Array|null);
                height?: (Long|null);
                transaction?: (vrp.ISignedTransaction|null);
                applicationStatus?: (vrp.node.grpc.ApplicationStatus|null);
                invokeScriptResult?: (vrp.IInvokeScriptResult|null);
            }

            class TransactionResponse implements ITransactionResponse {
                constructor(p?: vrp.node.grpc.ITransactionResponse);
                public id: Uint8Array;
                public height: Long;
                public transaction?: (vrp.ISignedTransaction|null);
                public applicationStatus: vrp.node.grpc.ApplicationStatus;
                public invokeScriptResult?: (vrp.IInvokeScriptResult|null);
                public static encode(m: vrp.node.grpc.ITransactionResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.TransactionResponse;
            }

            interface ITransactionsRequest {
                sender?: (Uint8Array|null);
                recipient?: (vrp.IRecipient|null);
                transactionIds?: (Uint8Array[]|null);
            }

            class TransactionsRequest implements ITransactionsRequest {
                constructor(p?: vrp.node.grpc.ITransactionsRequest);
                public sender: Uint8Array;
                public recipient?: (vrp.IRecipient|null);
                public transactionIds: Uint8Array[];
                public static encode(m: vrp.node.grpc.ITransactionsRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.TransactionsRequest;
            }

            interface ITransactionsByIdRequest {
                transactionIds?: (Uint8Array[]|null);
            }

            class TransactionsByIdRequest implements ITransactionsByIdRequest {
                constructor(p?: vrp.node.grpc.ITransactionsByIdRequest);
                public transactionIds: Uint8Array[];
                public static encode(m: vrp.node.grpc.ITransactionsByIdRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.TransactionsByIdRequest;
            }

            interface ICalculateFeeResponse {
                assetId?: (Uint8Array|null);
                amount?: (Long|null);
            }

            class CalculateFeeResponse implements ICalculateFeeResponse {
                constructor(p?: vrp.node.grpc.ICalculateFeeResponse);
                public assetId: Uint8Array;
                public amount: Long;
                public static encode(m: vrp.node.grpc.ICalculateFeeResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.CalculateFeeResponse;
            }

            interface ISignRequest {
                transaction?: (vrp.ITransaction|null);
                signerPublicKey?: (Uint8Array|null);
            }

            class SignRequest implements ISignRequest {
                constructor(p?: vrp.node.grpc.ISignRequest);
                public transaction?: (vrp.ITransaction|null);
                public signerPublicKey: Uint8Array;
                public static encode(m: vrp.node.grpc.ISignRequest, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.SignRequest;
            }

            interface IInvokeScriptResultResponse {
                transaction?: (vrp.ISignedTransaction|null);
                result?: (vrp.IInvokeScriptResult|null);
            }

            class InvokeScriptResultResponse implements IInvokeScriptResultResponse {
                constructor(p?: vrp.node.grpc.IInvokeScriptResultResponse);
                public transaction?: (vrp.ISignedTransaction|null);
                public result?: (vrp.IInvokeScriptResult|null);
                public static encode(m: vrp.node.grpc.IInvokeScriptResultResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.node.grpc.InvokeScriptResultResponse;
            }
        }
    }

    interface IAssetPair {
        amountAssetId?: (Uint8Array|null);
        priceAssetId?: (Uint8Array|null);
    }

    class AssetPair implements IAssetPair {
        constructor(p?: vrp.IAssetPair);
        public amountAssetId: Uint8Array;
        public priceAssetId: Uint8Array;
        public static encode(m: vrp.IAssetPair, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.AssetPair;
    }

    interface IOrder {
        chainId?: (Long|null);
        matcherPublicKey?: (Uint8Array|null);
        assetPair?: (vrp.IAssetPair|null);
        orderSide?: (vrp.Order.Side|null);
        amount?: (Long|null);
        price?: (Long|null);
        timestamp?: (Long|null);
        expiration?: (Long|null);
        matcherFee?: (vrp.IAmount|null);
        version?: (number|null);
        proofs?: (Uint8Array[]|null);
        priceMode?: (vrp.Order.PriceMode|null);
        senderPublicKey?: (Uint8Array|null);
        eip712Signature?: (Uint8Array|null);
    }

    class Order implements IOrder {
        constructor(p?: vrp.IOrder);
        public chainId: Long;
        public matcherPublicKey: Uint8Array;
        public assetPair?: (vrp.IAssetPair|null);
        public orderSide: vrp.Order.Side;
        public amount: Long;
        public price: Long;
        public timestamp: Long;
        public expiration: Long;
        public matcherFee?: (vrp.IAmount|null);
        public version: number;
        public proofs: Uint8Array[];
        public priceMode: vrp.Order.PriceMode;
        public senderPublicKey?: (Uint8Array|null);
        public eip712Signature?: (Uint8Array|null);
        public sender?: ("senderPublicKey"|"eip712Signature");
        public static encode(m: vrp.IOrder, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Order;
    }

    namespace Order {

        enum Side {
            BUY = 0,
            SELL = 1
        }

        enum PriceMode {
            DEFAULT = 0,
            FIXED_DECIMALS = 1,
            ASSET_DECIMALS = 2
        }
    }

    interface IRecipient {
        publicKeyHash?: (Uint8Array|null);
        alias?: (string|null);
    }

    class Recipient implements IRecipient {
        constructor(p?: vrp.IRecipient);
        public publicKeyHash?: (Uint8Array|null);
        public alias?: (string|null);
        public recipient?: ("publicKeyHash"|"alias");
        public static encode(m: vrp.IRecipient, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Recipient;
    }

    interface ISignedTransaction {
        vrpTransaction?: (vrp.ITransaction|null);
        ethereumTransaction?: (Uint8Array|null);
        proofs?: (Uint8Array[]|null);
    }

    class SignedTransaction implements ISignedTransaction {
        constructor(p?: vrp.ISignedTransaction);
        public vrpTransaction?: (vrp.ITransaction|null);
        public ethereumTransaction?: (Uint8Array|null);
        public proofs: Uint8Array[];
        public transaction?: ("vrpTransaction"|"ethereumTransaction");
        public static encode(m: vrp.ISignedTransaction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.SignedTransaction;
    }

    interface ITransaction {
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        fee?: (vrp.IAmount|null);
        timestamp?: (Long|null);
        version?: (number|null);
        genesis?: (vrp.IGenesisTransactionData|null);
        payment?: (vrp.IPaymentTransactionData|null);
        issue?: (vrp.IIssueTransactionData|null);
        transfer?: (vrp.ITransferTransactionData|null);
        reissue?: (vrp.IReissueTransactionData|null);
        burn?: (vrp.IBurnTransactionData|null);
        exchange?: (vrp.IExchangeTransactionData|null);
        lease?: (vrp.ILeaseTransactionData|null);
        leaseCancel?: (vrp.ILeaseCancelTransactionData|null);
        createAlias?: (vrp.ICreateAliasTransactionData|null);
        massTransfer?: (vrp.IMassTransferTransactionData|null);
        dataTransaction?: (vrp.IDataTransactionData|null);
        setScript?: (vrp.ISetScriptTransactionData|null);
        sponsorFee?: (vrp.ISponsorFeeTransactionData|null);
        setAssetScript?: (vrp.ISetAssetScriptTransactionData|null);
        invokeScript?: (vrp.IInvokeScriptTransactionData|null);
        updateAssetInfo?: (vrp.IUpdateAssetInfoTransactionData|null);
        anonymousTx?: (vrp.IPrivatePaymentTransactionData|null);
    }

    class Transaction implements ITransaction {
        constructor(p?: vrp.ITransaction);
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public fee?: (vrp.IAmount|null);
        public timestamp: Long;
        public version: number;
        public genesis?: (vrp.IGenesisTransactionData|null);
        public payment?: (vrp.IPaymentTransactionData|null);
        public issue?: (vrp.IIssueTransactionData|null);
        public transfer?: (vrp.ITransferTransactionData|null);
        public reissue?: (vrp.IReissueTransactionData|null);
        public burn?: (vrp.IBurnTransactionData|null);
        public exchange?: (vrp.IExchangeTransactionData|null);
        public lease?: (vrp.ILeaseTransactionData|null);
        public leaseCancel?: (vrp.ILeaseCancelTransactionData|null);
        public createAlias?: (vrp.ICreateAliasTransactionData|null);
        public massTransfer?: (vrp.IMassTransferTransactionData|null);
        public dataTransaction?: (vrp.IDataTransactionData|null);
        public setScript?: (vrp.ISetScriptTransactionData|null);
        public sponsorFee?: (vrp.ISponsorFeeTransactionData|null);
        public setAssetScript?: (vrp.ISetAssetScriptTransactionData|null);
        public invokeScript?: (vrp.IInvokeScriptTransactionData|null);
        public updateAssetInfo?: (vrp.IUpdateAssetInfoTransactionData|null);
        public anonymousTx?: (vrp.IPrivatePaymentTransactionData|null);
        public data?: ("genesis"|"payment"|"issue"|"transfer"|"reissue"|"burn"|"exchange"|"lease"|"leaseCancel"|"createAlias"|"massTransfer"|"dataTransaction"|"setScript"|"sponsorFee"|"setAssetScript"|"invokeScript"|"updateAssetInfo"|"anonymousTx");
        public static encode(m: vrp.ITransaction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.Transaction;
    }

    interface IGenesisTransactionData {
        recipientAddress?: (Uint8Array|null);
        amount?: (Long|null);
    }

    class GenesisTransactionData implements IGenesisTransactionData {
        constructor(p?: vrp.IGenesisTransactionData);
        public recipientAddress: Uint8Array;
        public amount: Long;
        public static encode(m: vrp.IGenesisTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.GenesisTransactionData;
    }

    interface IPaymentTransactionData {
        recipientAddress?: (Uint8Array|null);
        amount?: (Long|null);
    }

    class PaymentTransactionData implements IPaymentTransactionData {
        constructor(p?: vrp.IPaymentTransactionData);
        public recipientAddress: Uint8Array;
        public amount: Long;
        public static encode(m: vrp.IPaymentTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.PaymentTransactionData;
    }

    interface ITransferTransactionData {
        recipient?: (vrp.IRecipient|null);
        amount?: (vrp.IAmount|null);
        attachment?: (Uint8Array|null);
    }

    class TransferTransactionData implements ITransferTransactionData {
        constructor(p?: vrp.ITransferTransactionData);
        public recipient?: (vrp.IRecipient|null);
        public amount?: (vrp.IAmount|null);
        public attachment: Uint8Array;
        public static encode(m: vrp.ITransferTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.TransferTransactionData;
    }

    interface ICreateAliasTransactionData {
        alias?: (string|null);
    }

    class CreateAliasTransactionData implements ICreateAliasTransactionData {
        constructor(p?: vrp.ICreateAliasTransactionData);
        public alias: string;
        public static encode(m: vrp.ICreateAliasTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.CreateAliasTransactionData;
    }

    interface IDataTransactionData {
        data?: (vrp.DataTransactionData.IDataEntry[]|null);
    }

    class DataTransactionData implements IDataTransactionData {
        constructor(p?: vrp.IDataTransactionData);
        public data: vrp.DataTransactionData.IDataEntry[];
        public static encode(m: vrp.IDataTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.DataTransactionData;
    }

    namespace DataTransactionData {

        interface IDataEntry {
            key?: (string|null);
            intValue?: (Long|null);
            boolValue?: (boolean|null);
            binaryValue?: (Uint8Array|null);
            stringValue?: (string|null);
        }

        class DataEntry implements IDataEntry {
            constructor(p?: vrp.DataTransactionData.IDataEntry);
            public key: string;
            public intValue?: (Long|null);
            public boolValue?: (boolean|null);
            public binaryValue?: (Uint8Array|null);
            public stringValue?: (string|null);
            public value?: ("intValue"|"boolValue"|"binaryValue"|"stringValue");
            public static encode(m: vrp.DataTransactionData.IDataEntry, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.DataTransactionData.DataEntry;
        }
    }

    interface IMassTransferTransactionData {
        assetId?: (Uint8Array|null);
        transfers?: (vrp.MassTransferTransactionData.ITransfer[]|null);
        attachment?: (Uint8Array|null);
    }

    class MassTransferTransactionData implements IMassTransferTransactionData {
        constructor(p?: vrp.IMassTransferTransactionData);
        public assetId: Uint8Array;
        public transfers: vrp.MassTransferTransactionData.ITransfer[];
        public attachment: Uint8Array;
        public static encode(m: vrp.IMassTransferTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.MassTransferTransactionData;
    }

    namespace MassTransferTransactionData {

        interface ITransfer {
            recipient?: (vrp.IRecipient|null);
            amount?: (Long|null);
        }

        class Transfer implements ITransfer {
            constructor(p?: vrp.MassTransferTransactionData.ITransfer);
            public recipient?: (vrp.IRecipient|null);
            public amount: Long;
            public static encode(m: vrp.MassTransferTransactionData.ITransfer, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.MassTransferTransactionData.Transfer;
        }
    }

    interface ILeaseTransactionData {
        recipient?: (vrp.IRecipient|null);
        amount?: (Long|null);
    }

    class LeaseTransactionData implements ILeaseTransactionData {
        constructor(p?: vrp.ILeaseTransactionData);
        public recipient?: (vrp.IRecipient|null);
        public amount: Long;
        public static encode(m: vrp.ILeaseTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.LeaseTransactionData;
    }

    interface ILeaseCancelTransactionData {
        leaseId?: (Uint8Array|null);
    }

    class LeaseCancelTransactionData implements ILeaseCancelTransactionData {
        constructor(p?: vrp.ILeaseCancelTransactionData);
        public leaseId: Uint8Array;
        public static encode(m: vrp.ILeaseCancelTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.LeaseCancelTransactionData;
    }

    interface IBurnTransactionData {
        assetAmount?: (vrp.IAmount|null);
    }

    class BurnTransactionData implements IBurnTransactionData {
        constructor(p?: vrp.IBurnTransactionData);
        public assetAmount?: (vrp.IAmount|null);
        public static encode(m: vrp.IBurnTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.BurnTransactionData;
    }

    interface IIssueTransactionData {
        name?: (string|null);
        description?: (string|null);
        amount?: (Long|null);
        decimals?: (number|null);
        reissuable?: (boolean|null);
        script?: (Uint8Array|null);
    }

    class IssueTransactionData implements IIssueTransactionData {
        constructor(p?: vrp.IIssueTransactionData);
        public name: string;
        public description: string;
        public amount: Long;
        public decimals: number;
        public reissuable: boolean;
        public script: Uint8Array;
        public static encode(m: vrp.IIssueTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.IssueTransactionData;
    }

    interface IReissueTransactionData {
        assetAmount?: (vrp.IAmount|null);
        reissuable?: (boolean|null);
    }

    class ReissueTransactionData implements IReissueTransactionData {
        constructor(p?: vrp.IReissueTransactionData);
        public assetAmount?: (vrp.IAmount|null);
        public reissuable: boolean;
        public static encode(m: vrp.IReissueTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.ReissueTransactionData;
    }

    interface ISetAssetScriptTransactionData {
        assetId?: (Uint8Array|null);
        script?: (Uint8Array|null);
    }

    class SetAssetScriptTransactionData implements ISetAssetScriptTransactionData {
        constructor(p?: vrp.ISetAssetScriptTransactionData);
        public assetId: Uint8Array;
        public script: Uint8Array;
        public static encode(m: vrp.ISetAssetScriptTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.SetAssetScriptTransactionData;
    }

    interface ISetScriptTransactionData {
        script?: (Uint8Array|null);
    }

    class SetScriptTransactionData implements ISetScriptTransactionData {
        constructor(p?: vrp.ISetScriptTransactionData);
        public script: Uint8Array;
        public static encode(m: vrp.ISetScriptTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.SetScriptTransactionData;
    }

    interface IExchangeTransactionData {
        amount?: (Long|null);
        price?: (Long|null);
        buyMatcherFee?: (Long|null);
        sellMatcherFee?: (Long|null);
        orders?: (vrp.IOrder[]|null);
    }

    class ExchangeTransactionData implements IExchangeTransactionData {
        constructor(p?: vrp.IExchangeTransactionData);
        public amount: Long;
        public price: Long;
        public buyMatcherFee: Long;
        public sellMatcherFee: Long;
        public orders: vrp.IOrder[];
        public static encode(m: vrp.IExchangeTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.ExchangeTransactionData;
    }

    interface ISponsorFeeTransactionData {
        minFee?: (vrp.IAmount|null);
    }

    class SponsorFeeTransactionData implements ISponsorFeeTransactionData {
        constructor(p?: vrp.ISponsorFeeTransactionData);
        public minFee?: (vrp.IAmount|null);
        public static encode(m: vrp.ISponsorFeeTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.SponsorFeeTransactionData;
    }

    interface IInvokeScriptTransactionData {
        dApp?: (vrp.IRecipient|null);
        functionCall?: (Uint8Array|null);
        payments?: (vrp.IAmount[]|null);
    }

    class InvokeScriptTransactionData implements IInvokeScriptTransactionData {
        constructor(p?: vrp.IInvokeScriptTransactionData);
        public dApp?: (vrp.IRecipient|null);
        public functionCall: Uint8Array;
        public payments: vrp.IAmount[];
        public static encode(m: vrp.IInvokeScriptTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeScriptTransactionData;
    }

    interface IUpdateAssetInfoTransactionData {
        assetId?: (Uint8Array|null);
        name?: (string|null);
        description?: (string|null);
        image?: (string|null);
    }

    class UpdateAssetInfoTransactionData implements IUpdateAssetInfoTransactionData {
        constructor(p?: vrp.IUpdateAssetInfoTransactionData);
        public assetId: Uint8Array;
        public name: string;
        public description: string;
        public image: string;
        public static encode(m: vrp.IUpdateAssetInfoTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.UpdateAssetInfoTransactionData;
    }

    interface IInvokeExpressionTransactionData {
        expression?: (Uint8Array|null);
    }

    class InvokeExpressionTransactionData implements IInvokeExpressionTransactionData {
        constructor(p?: vrp.IInvokeExpressionTransactionData);
        public expression: Uint8Array;
        public static encode(m: vrp.IInvokeExpressionTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.InvokeExpressionTransactionData;
    }

    interface IPrivatePaymentTransactionData {
        recipientAddress?: (Uint8Array|null);
        amount?: (Long|null);
    }

    class PrivatePaymentTransactionData implements IPrivatePaymentTransactionData {
        constructor(p?: vrp.IPrivatePaymentTransactionData);
        public recipientAddress: Uint8Array;
        public amount: Long;
        public static encode(m: vrp.IPrivatePaymentTransactionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): vrp.PrivatePaymentTransactionData;
    }
}

export namespace google {

    namespace protobuf {

        interface IDoubleValue {
            value?: (number|null);
        }

        class DoubleValue implements IDoubleValue {
            constructor(p?: google.protobuf.IDoubleValue);
            public value: number;
            public static encode(m: google.protobuf.IDoubleValue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.DoubleValue;
        }

        interface IFloatValue {
            value?: (number|null);
        }

        class FloatValue implements IFloatValue {
            constructor(p?: google.protobuf.IFloatValue);
            public value: number;
            public static encode(m: google.protobuf.IFloatValue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.FloatValue;
        }

        interface IInt64Value {
            value?: (Long|null);
        }

        class Int64Value implements IInt64Value {
            constructor(p?: google.protobuf.IInt64Value);
            public value: Long;
            public static encode(m: google.protobuf.IInt64Value, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Int64Value;
        }

        interface IUInt64Value {
            value?: (Long|null);
        }

        class UInt64Value implements IUInt64Value {
            constructor(p?: google.protobuf.IUInt64Value);
            public value: Long;
            public static encode(m: google.protobuf.IUInt64Value, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.UInt64Value;
        }

        interface IInt32Value {
            value?: (number|null);
        }

        class Int32Value implements IInt32Value {
            constructor(p?: google.protobuf.IInt32Value);
            public value: number;
            public static encode(m: google.protobuf.IInt32Value, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Int32Value;
        }

        interface IUInt32Value {
            value?: (number|null);
        }

        class UInt32Value implements IUInt32Value {
            constructor(p?: google.protobuf.IUInt32Value);
            public value: number;
            public static encode(m: google.protobuf.IUInt32Value, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.UInt32Value;
        }

        interface IBoolValue {
            value?: (boolean|null);
        }

        class BoolValue implements IBoolValue {
            constructor(p?: google.protobuf.IBoolValue);
            public value: boolean;
            public static encode(m: google.protobuf.IBoolValue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.BoolValue;
        }

        interface IStringValue {
            value?: (string|null);
        }

        class StringValue implements IStringValue {
            constructor(p?: google.protobuf.IStringValue);
            public value: string;
            public static encode(m: google.protobuf.IStringValue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.StringValue;
        }

        interface IBytesValue {
            value?: (Uint8Array|null);
        }

        class BytesValue implements IBytesValue {
            constructor(p?: google.protobuf.IBytesValue);
            public value: Uint8Array;
            public static encode(m: google.protobuf.IBytesValue, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.BytesValue;
        }

        interface IEmpty {
        }

        class Empty implements IEmpty {
            constructor(p?: google.protobuf.IEmpty);
            public static encode(m: google.protobuf.IEmpty, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Empty;
        }
    }
}
