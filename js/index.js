/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.vrp = (function() {

    var vrp = {};

    vrp.Amount = (function() {

        function Amount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Amount.prototype.assetId = $util.newBuffer([]);
        Amount.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Amount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                w.uint32(10).bytes(m.assetId);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        Amount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Amount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetId = r.bytes();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Amount;
    })();

    vrp.Block = (function() {

        function Block(p) {
            this.transactions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Block.prototype.header = null;
        Block.prototype.signature = $util.newBuffer([]);
        Block.prototype.transactions = $util.emptyArray;

        Block.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                $root.vrp.Block.Header.encode(m.header, w.uint32(10).fork()).ldelim();
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.transactions != null && m.transactions.length) {
                for (var i = 0; i < m.transactions.length; ++i)
                    $root.vrp.SignedTransaction.encode(m.transactions[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        Block.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Block();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.header = $root.vrp.Block.Header.decode(r, r.uint32());
                    break;
                case 2:
                    m.signature = r.bytes();
                    break;
                case 3:
                    if (!(m.transactions && m.transactions.length))
                        m.transactions = [];
                    m.transactions.push($root.vrp.SignedTransaction.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Block.Header = (function() {

            function Header(p) {
                this.featureVotes = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Header.prototype.chainId = 0;
            Header.prototype.reference = $util.newBuffer([]);
            Header.prototype.baseTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Header.prototype.generationSignature = $util.newBuffer([]);
            Header.prototype.featureVotes = $util.emptyArray;
            Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Header.prototype.version = 0;
            Header.prototype.generator = $util.newBuffer([]);
            Header.prototype.rewardVote = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Header.prototype.rewardBurned = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Header.prototype.transactionsRoot = $util.newBuffer([]);

            Header.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId"))
                    w.uint32(8).int32(m.chainId);
                if (m.reference != null && Object.hasOwnProperty.call(m, "reference"))
                    w.uint32(18).bytes(m.reference);
                if (m.baseTarget != null && Object.hasOwnProperty.call(m, "baseTarget"))
                    w.uint32(24).int64(m.baseTarget);
                if (m.generationSignature != null && Object.hasOwnProperty.call(m, "generationSignature"))
                    w.uint32(34).bytes(m.generationSignature);
                if (m.featureVotes != null && m.featureVotes.length) {
                    w.uint32(42).fork();
                    for (var i = 0; i < m.featureVotes.length; ++i)
                        w.uint32(m.featureVotes[i]);
                    w.ldelim();
                }
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(48).int64(m.timestamp);
                if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                    w.uint32(56).int32(m.version);
                if (m.generator != null && Object.hasOwnProperty.call(m, "generator"))
                    w.uint32(66).bytes(m.generator);
                if (m.rewardVote != null && Object.hasOwnProperty.call(m, "rewardVote"))
                    w.uint32(72).int64(m.rewardVote);
                if (m.rewardBurned != null && Object.hasOwnProperty.call(m, "rewardBurned"))
                    w.uint32(80).int64(m.rewardBurned);
                if (m.transactionsRoot != null && Object.hasOwnProperty.call(m, "transactionsRoot"))
                    w.uint32(90).bytes(m.transactionsRoot);
                return w;
            };

            Header.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Block.Header();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.chainId = r.int32();
                        break;
                    case 2:
                        m.reference = r.bytes();
                        break;
                    case 3:
                        m.baseTarget = r.int64();
                        break;
                    case 4:
                        m.generationSignature = r.bytes();
                        break;
                    case 5:
                        if (!(m.featureVotes && m.featureVotes.length))
                            m.featureVotes = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.featureVotes.push(r.uint32());
                        } else
                            m.featureVotes.push(r.uint32());
                        break;
                    case 6:
                        m.timestamp = r.int64();
                        break;
                    case 7:
                        m.version = r.int32();
                        break;
                    case 8:
                        m.generator = r.bytes();
                        break;
                    case 9:
                        m.rewardVote = r.int64();
                        break;
                    case 10:
                        m.rewardBurned = r.int64();
                        break;
                    case 11:
                        m.transactionsRoot = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Header;
        })();

        return Block;
    })();

    vrp.MicroBlock = (function() {

        function MicroBlock(p) {
            this.transactions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MicroBlock.prototype.version = 0;
        MicroBlock.prototype.reference = $util.newBuffer([]);
        MicroBlock.prototype.updatedBlockSignature = $util.newBuffer([]);
        MicroBlock.prototype.senderPublicKey = $util.newBuffer([]);
        MicroBlock.prototype.transactions = $util.emptyArray;

        MicroBlock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(8).int32(m.version);
            if (m.reference != null && Object.hasOwnProperty.call(m, "reference"))
                w.uint32(18).bytes(m.reference);
            if (m.updatedBlockSignature != null && Object.hasOwnProperty.call(m, "updatedBlockSignature"))
                w.uint32(26).bytes(m.updatedBlockSignature);
            if (m.senderPublicKey != null && Object.hasOwnProperty.call(m, "senderPublicKey"))
                w.uint32(34).bytes(m.senderPublicKey);
            if (m.transactions != null && m.transactions.length) {
                for (var i = 0; i < m.transactions.length; ++i)
                    $root.vrp.SignedTransaction.encode(m.transactions[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        MicroBlock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.MicroBlock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.version = r.int32();
                    break;
                case 2:
                    m.reference = r.bytes();
                    break;
                case 3:
                    m.updatedBlockSignature = r.bytes();
                    break;
                case 4:
                    m.senderPublicKey = r.bytes();
                    break;
                case 5:
                    if (!(m.transactions && m.transactions.length))
                        m.transactions = [];
                    m.transactions.push($root.vrp.SignedTransaction.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MicroBlock;
    })();

    vrp.SignedMicroBlock = (function() {

        function SignedMicroBlock(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SignedMicroBlock.prototype.microBlock = null;
        SignedMicroBlock.prototype.signature = $util.newBuffer([]);
        SignedMicroBlock.prototype.totalBlockId = $util.newBuffer([]);

        SignedMicroBlock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.microBlock != null && Object.hasOwnProperty.call(m, "microBlock"))
                $root.vrp.MicroBlock.encode(m.microBlock, w.uint32(10).fork()).ldelim();
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.totalBlockId != null && Object.hasOwnProperty.call(m, "totalBlockId"))
                w.uint32(26).bytes(m.totalBlockId);
            return w;
        };

        SignedMicroBlock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.SignedMicroBlock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.microBlock = $root.vrp.MicroBlock.decode(r, r.uint32());
                    break;
                case 2:
                    m.signature = r.bytes();
                    break;
                case 3:
                    m.totalBlockId = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SignedMicroBlock;
    })();

    vrp.events = (function() {

        var events = {};

        events.BlockchainUpdated = (function() {

            function BlockchainUpdated(p) {
                this.referencedAssets = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            BlockchainUpdated.prototype.id = $util.newBuffer([]);
            BlockchainUpdated.prototype.height = 0;
            BlockchainUpdated.prototype.append = null;
            BlockchainUpdated.prototype.rollback = null;
            BlockchainUpdated.prototype.referencedAssets = $util.emptyArray;

            var $oneOfFields;

            Object.defineProperty(BlockchainUpdated.prototype, "update", {
                get: $util.oneOfGetter($oneOfFields = ["append", "rollback"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BlockchainUpdated.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                    w.uint32(10).bytes(m.id);
                if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                    w.uint32(16).int32(m.height);
                if (m.append != null && Object.hasOwnProperty.call(m, "append"))
                    $root.vrp.events.BlockchainUpdated.Append.encode(m.append, w.uint32(90).fork()).ldelim();
                if (m.rollback != null && Object.hasOwnProperty.call(m, "rollback"))
                    $root.vrp.events.BlockchainUpdated.Rollback.encode(m.rollback, w.uint32(98).fork()).ldelim();
                if (m.referencedAssets != null && m.referencedAssets.length) {
                    for (var i = 0; i < m.referencedAssets.length; ++i)
                        $root.vrp.events.StateUpdate.AssetInfo.encode(m.referencedAssets[i], w.uint32(170).fork()).ldelim();
                }
                return w;
            };

            BlockchainUpdated.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.BlockchainUpdated();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.bytes();
                        break;
                    case 2:
                        m.height = r.int32();
                        break;
                    case 11:
                        m.append = $root.vrp.events.BlockchainUpdated.Append.decode(r, r.uint32());
                        break;
                    case 12:
                        m.rollback = $root.vrp.events.BlockchainUpdated.Rollback.decode(r, r.uint32());
                        break;
                    case 21:
                        if (!(m.referencedAssets && m.referencedAssets.length))
                            m.referencedAssets = [];
                        m.referencedAssets.push($root.vrp.events.StateUpdate.AssetInfo.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            BlockchainUpdated.Append = (function() {

                function Append(p) {
                    this.transactionIds = [];
                    this.transactionsMetadata = [];
                    this.transactionStateUpdates = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                Append.prototype.block = null;
                Append.prototype.microBlock = null;
                Append.prototype.transactionIds = $util.emptyArray;
                Append.prototype.transactionsMetadata = $util.emptyArray;
                Append.prototype.stateUpdate = null;
                Append.prototype.transactionStateUpdates = $util.emptyArray;

                var $oneOfFields;

                Object.defineProperty(Append.prototype, "body", {
                    get: $util.oneOfGetter($oneOfFields = ["block", "microBlock"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Append.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.block != null && Object.hasOwnProperty.call(m, "block"))
                        $root.vrp.events.BlockchainUpdated.Append.BlockAppend.encode(m.block, w.uint32(10).fork()).ldelim();
                    if (m.microBlock != null && Object.hasOwnProperty.call(m, "microBlock"))
                        $root.vrp.events.BlockchainUpdated.Append.MicroBlockAppend.encode(m.microBlock, w.uint32(18).fork()).ldelim();
                    if (m.transactionIds != null && m.transactionIds.length) {
                        for (var i = 0; i < m.transactionIds.length; ++i)
                            w.uint32(26).bytes(m.transactionIds[i]);
                    }
                    if (m.transactionsMetadata != null && m.transactionsMetadata.length) {
                        for (var i = 0; i < m.transactionsMetadata.length; ++i)
                            $root.vrp.events.TransactionMetadata.encode(m.transactionsMetadata[i], w.uint32(34).fork()).ldelim();
                    }
                    if (m.stateUpdate != null && Object.hasOwnProperty.call(m, "stateUpdate"))
                        $root.vrp.events.StateUpdate.encode(m.stateUpdate, w.uint32(90).fork()).ldelim();
                    if (m.transactionStateUpdates != null && m.transactionStateUpdates.length) {
                        for (var i = 0; i < m.transactionStateUpdates.length; ++i)
                            $root.vrp.events.StateUpdate.encode(m.transactionStateUpdates[i], w.uint32(98).fork()).ldelim();
                    }
                    return w;
                };

                Append.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.BlockchainUpdated.Append();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.block = $root.vrp.events.BlockchainUpdated.Append.BlockAppend.decode(r, r.uint32());
                            break;
                        case 2:
                            m.microBlock = $root.vrp.events.BlockchainUpdated.Append.MicroBlockAppend.decode(r, r.uint32());
                            break;
                        case 3:
                            if (!(m.transactionIds && m.transactionIds.length))
                                m.transactionIds = [];
                            m.transactionIds.push(r.bytes());
                            break;
                        case 4:
                            if (!(m.transactionsMetadata && m.transactionsMetadata.length))
                                m.transactionsMetadata = [];
                            m.transactionsMetadata.push($root.vrp.events.TransactionMetadata.decode(r, r.uint32()));
                            break;
                        case 11:
                            m.stateUpdate = $root.vrp.events.StateUpdate.decode(r, r.uint32());
                            break;
                        case 12:
                            if (!(m.transactionStateUpdates && m.transactionStateUpdates.length))
                                m.transactionStateUpdates = [];
                            m.transactionStateUpdates.push($root.vrp.events.StateUpdate.decode(r, r.uint32()));
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                Append.BlockAppend = (function() {

                    function BlockAppend(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    BlockAppend.prototype.block = null;
                    BlockAppend.prototype.updatedVrpAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    BlockAppend.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.block != null && Object.hasOwnProperty.call(m, "block"))
                            $root.vrp.Block.encode(m.block, w.uint32(10).fork()).ldelim();
                        if (m.updatedVrpAmount != null && Object.hasOwnProperty.call(m, "updatedVrpAmount"))
                            w.uint32(16).int64(m.updatedVrpAmount);
                        return w;
                    };

                    BlockAppend.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.BlockchainUpdated.Append.BlockAppend();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.block = $root.vrp.Block.decode(r, r.uint32());
                                break;
                            case 2:
                                m.updatedVrpAmount = r.int64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    return BlockAppend;
                })();

                Append.MicroBlockAppend = (function() {

                    function MicroBlockAppend(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MicroBlockAppend.prototype.microBlock = null;
                    MicroBlockAppend.prototype.updatedTransactionsRoot = $util.newBuffer([]);

                    MicroBlockAppend.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.microBlock != null && Object.hasOwnProperty.call(m, "microBlock"))
                            $root.vrp.SignedMicroBlock.encode(m.microBlock, w.uint32(10).fork()).ldelim();
                        if (m.updatedTransactionsRoot != null && Object.hasOwnProperty.call(m, "updatedTransactionsRoot"))
                            w.uint32(18).bytes(m.updatedTransactionsRoot);
                        return w;
                    };

                    MicroBlockAppend.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.BlockchainUpdated.Append.MicroBlockAppend();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.microBlock = $root.vrp.SignedMicroBlock.decode(r, r.uint32());
                                break;
                            case 2:
                                m.updatedTransactionsRoot = r.bytes();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    return MicroBlockAppend;
                })();

                return Append;
            })();

            BlockchainUpdated.Rollback = (function() {

                function Rollback(p) {
                    this.removedTransactionIds = [];
                    this.removedBlocks = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                Rollback.prototype.type = 0;
                Rollback.prototype.removedTransactionIds = $util.emptyArray;
                Rollback.prototype.removedBlocks = $util.emptyArray;
                Rollback.prototype.rollbackStateUpdate = null;

                Rollback.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                        w.uint32(8).int32(m.type);
                    if (m.removedTransactionIds != null && m.removedTransactionIds.length) {
                        for (var i = 0; i < m.removedTransactionIds.length; ++i)
                            w.uint32(18).bytes(m.removedTransactionIds[i]);
                    }
                    if (m.removedBlocks != null && m.removedBlocks.length) {
                        for (var i = 0; i < m.removedBlocks.length; ++i)
                            $root.vrp.Block.encode(m.removedBlocks[i], w.uint32(26).fork()).ldelim();
                    }
                    if (m.rollbackStateUpdate != null && Object.hasOwnProperty.call(m, "rollbackStateUpdate"))
                        $root.vrp.events.StateUpdate.encode(m.rollbackStateUpdate, w.uint32(34).fork()).ldelim();
                    return w;
                };

                Rollback.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.BlockchainUpdated.Rollback();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.type = r.int32();
                            break;
                        case 2:
                            if (!(m.removedTransactionIds && m.removedTransactionIds.length))
                                m.removedTransactionIds = [];
                            m.removedTransactionIds.push(r.bytes());
                            break;
                        case 3:
                            if (!(m.removedBlocks && m.removedBlocks.length))
                                m.removedBlocks = [];
                            m.removedBlocks.push($root.vrp.Block.decode(r, r.uint32()));
                            break;
                        case 4:
                            m.rollbackStateUpdate = $root.vrp.events.StateUpdate.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                Rollback.RollbackType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "BLOCK"] = 0;
                    values[valuesById[1] = "MICROBLOCK"] = 1;
                    return values;
                })();

                return Rollback;
            })();

            return BlockchainUpdated;
        })();

        events.StateUpdate = (function() {

            function StateUpdate(p) {
                this.balances = [];
                this.leasingForAddress = [];
                this.dataEntries = [];
                this.assets = [];
                this.individualLeases = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            StateUpdate.prototype.balances = $util.emptyArray;
            StateUpdate.prototype.leasingForAddress = $util.emptyArray;
            StateUpdate.prototype.dataEntries = $util.emptyArray;
            StateUpdate.prototype.assets = $util.emptyArray;
            StateUpdate.prototype.individualLeases = $util.emptyArray;

            StateUpdate.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.balances != null && m.balances.length) {
                    for (var i = 0; i < m.balances.length; ++i)
                        $root.vrp.events.StateUpdate.BalanceUpdate.encode(m.balances[i], w.uint32(10).fork()).ldelim();
                }
                if (m.leasingForAddress != null && m.leasingForAddress.length) {
                    for (var i = 0; i < m.leasingForAddress.length; ++i)
                        $root.vrp.events.StateUpdate.LeasingUpdate.encode(m.leasingForAddress[i], w.uint32(18).fork()).ldelim();
                }
                if (m.dataEntries != null && m.dataEntries.length) {
                    for (var i = 0; i < m.dataEntries.length; ++i)
                        $root.vrp.events.StateUpdate.DataEntryUpdate.encode(m.dataEntries[i], w.uint32(26).fork()).ldelim();
                }
                if (m.assets != null && m.assets.length) {
                    for (var i = 0; i < m.assets.length; ++i)
                        $root.vrp.events.StateUpdate.AssetStateUpdate.encode(m.assets[i], w.uint32(34).fork()).ldelim();
                }
                if (m.individualLeases != null && m.individualLeases.length) {
                    for (var i = 0; i < m.individualLeases.length; ++i)
                        $root.vrp.events.StateUpdate.LeaseUpdate.encode(m.individualLeases[i], w.uint32(42).fork()).ldelim();
                }
                return w;
            };

            StateUpdate.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.balances && m.balances.length))
                            m.balances = [];
                        m.balances.push($root.vrp.events.StateUpdate.BalanceUpdate.decode(r, r.uint32()));
                        break;
                    case 2:
                        if (!(m.leasingForAddress && m.leasingForAddress.length))
                            m.leasingForAddress = [];
                        m.leasingForAddress.push($root.vrp.events.StateUpdate.LeasingUpdate.decode(r, r.uint32()));
                        break;
                    case 3:
                        if (!(m.dataEntries && m.dataEntries.length))
                            m.dataEntries = [];
                        m.dataEntries.push($root.vrp.events.StateUpdate.DataEntryUpdate.decode(r, r.uint32()));
                        break;
                    case 4:
                        if (!(m.assets && m.assets.length))
                            m.assets = [];
                        m.assets.push($root.vrp.events.StateUpdate.AssetStateUpdate.decode(r, r.uint32()));
                        break;
                    case 5:
                        if (!(m.individualLeases && m.individualLeases.length))
                            m.individualLeases = [];
                        m.individualLeases.push($root.vrp.events.StateUpdate.LeaseUpdate.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            StateUpdate.BalanceUpdate = (function() {

                function BalanceUpdate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BalanceUpdate.prototype.address = $util.newBuffer([]);
                BalanceUpdate.prototype.amountAfter = null;
                BalanceUpdate.prototype.amountBefore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                BalanceUpdate.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.amountAfter != null && Object.hasOwnProperty.call(m, "amountAfter"))
                        $root.vrp.Amount.encode(m.amountAfter, w.uint32(18).fork()).ldelim();
                    if (m.amountBefore != null && Object.hasOwnProperty.call(m, "amountBefore"))
                        w.uint32(24).int64(m.amountBefore);
                    return w;
                };

                BalanceUpdate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.BalanceUpdate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.amountAfter = $root.vrp.Amount.decode(r, r.uint32());
                            break;
                        case 3:
                            m.amountBefore = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BalanceUpdate;
            })();

            StateUpdate.LeasingUpdate = (function() {

                function LeasingUpdate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                LeasingUpdate.prototype.address = $util.newBuffer([]);
                LeasingUpdate.prototype.inAfter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                LeasingUpdate.prototype.outAfter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                LeasingUpdate.prototype.inBefore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                LeasingUpdate.prototype.outBefore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                LeasingUpdate.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.inAfter != null && Object.hasOwnProperty.call(m, "inAfter"))
                        w.uint32(16).int64(m.inAfter);
                    if (m.outAfter != null && Object.hasOwnProperty.call(m, "outAfter"))
                        w.uint32(24).int64(m.outAfter);
                    if (m.inBefore != null && Object.hasOwnProperty.call(m, "inBefore"))
                        w.uint32(32).int64(m.inBefore);
                    if (m.outBefore != null && Object.hasOwnProperty.call(m, "outBefore"))
                        w.uint32(40).int64(m.outBefore);
                    return w;
                };

                LeasingUpdate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.LeasingUpdate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.inAfter = r.int64();
                            break;
                        case 3:
                            m.outAfter = r.int64();
                            break;
                        case 4:
                            m.inBefore = r.int64();
                            break;
                        case 5:
                            m.outBefore = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return LeasingUpdate;
            })();

            StateUpdate.LeaseUpdate = (function() {

                function LeaseUpdate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                LeaseUpdate.prototype.leaseId = $util.newBuffer([]);
                LeaseUpdate.prototype.statusAfter = 0;
                LeaseUpdate.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                LeaseUpdate.prototype.sender = $util.newBuffer([]);
                LeaseUpdate.prototype.recipient = $util.newBuffer([]);
                LeaseUpdate.prototype.originTransactionId = $util.newBuffer([]);

                LeaseUpdate.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.leaseId != null && Object.hasOwnProperty.call(m, "leaseId"))
                        w.uint32(10).bytes(m.leaseId);
                    if (m.statusAfter != null && Object.hasOwnProperty.call(m, "statusAfter"))
                        w.uint32(16).int32(m.statusAfter);
                    if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                        w.uint32(80).int64(m.amount);
                    if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
                        w.uint32(90).bytes(m.sender);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                        w.uint32(98).bytes(m.recipient);
                    if (m.originTransactionId != null && Object.hasOwnProperty.call(m, "originTransactionId"))
                        w.uint32(106).bytes(m.originTransactionId);
                    return w;
                };

                LeaseUpdate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.LeaseUpdate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.leaseId = r.bytes();
                            break;
                        case 2:
                            m.statusAfter = r.int32();
                            break;
                        case 10:
                            m.amount = r.int64();
                            break;
                        case 11:
                            m.sender = r.bytes();
                            break;
                        case 12:
                            m.recipient = r.bytes();
                            break;
                        case 13:
                            m.originTransactionId = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                LeaseUpdate.LeaseStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INACTIVE"] = 0;
                    values[valuesById[1] = "ACTIVE"] = 1;
                    return values;
                })();

                return LeaseUpdate;
            })();

            StateUpdate.DataEntryUpdate = (function() {

                function DataEntryUpdate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                DataEntryUpdate.prototype.address = $util.newBuffer([]);
                DataEntryUpdate.prototype.dataEntry = null;
                DataEntryUpdate.prototype.dataEntryBefore = null;

                DataEntryUpdate.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.dataEntry != null && Object.hasOwnProperty.call(m, "dataEntry"))
                        $root.vrp.DataTransactionData.DataEntry.encode(m.dataEntry, w.uint32(18).fork()).ldelim();
                    if (m.dataEntryBefore != null && Object.hasOwnProperty.call(m, "dataEntryBefore"))
                        $root.vrp.DataTransactionData.DataEntry.encode(m.dataEntryBefore, w.uint32(82).fork()).ldelim();
                    return w;
                };

                DataEntryUpdate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.DataEntryUpdate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.dataEntry = $root.vrp.DataTransactionData.DataEntry.decode(r, r.uint32());
                            break;
                        case 10:
                            m.dataEntryBefore = $root.vrp.DataTransactionData.DataEntry.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return DataEntryUpdate;
            })();

            StateUpdate.AssetStateUpdate = (function() {

                function AssetStateUpdate(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AssetStateUpdate.prototype.before = null;
                AssetStateUpdate.prototype.after = null;

                AssetStateUpdate.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.before != null && Object.hasOwnProperty.call(m, "before"))
                        $root.vrp.events.StateUpdate.AssetDetails.encode(m.before, w.uint32(10).fork()).ldelim();
                    if (m.after != null && Object.hasOwnProperty.call(m, "after"))
                        $root.vrp.events.StateUpdate.AssetDetails.encode(m.after, w.uint32(18).fork()).ldelim();
                    return w;
                };

                AssetStateUpdate.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.AssetStateUpdate();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.before = $root.vrp.events.StateUpdate.AssetDetails.decode(r, r.uint32());
                            break;
                        case 2:
                            m.after = $root.vrp.events.StateUpdate.AssetDetails.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return AssetStateUpdate;
            })();

            StateUpdate.AssetDetails = (function() {

                function AssetDetails(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AssetDetails.prototype.assetId = $util.newBuffer([]);
                AssetDetails.prototype.issuer = $util.newBuffer([]);
                AssetDetails.prototype.decimals = 0;
                AssetDetails.prototype.name = "";
                AssetDetails.prototype.description = "";
                AssetDetails.prototype.image = "";
                AssetDetails.prototype.reissuable = false;
                AssetDetails.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                AssetDetails.prototype.scriptInfo = null;
                AssetDetails.prototype.sponsorship = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                AssetDetails.prototype.nft = false;
                AssetDetails.prototype.lastUpdated = 0;
                AssetDetails.prototype.safeVolume = $util.newBuffer([]);

                AssetDetails.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                        w.uint32(10).bytes(m.assetId);
                    if (m.issuer != null && Object.hasOwnProperty.call(m, "issuer"))
                        w.uint32(18).bytes(m.issuer);
                    if (m.decimals != null && Object.hasOwnProperty.call(m, "decimals"))
                        w.uint32(24).int32(m.decimals);
                    if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                        w.uint32(34).string(m.name);
                    if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                        w.uint32(42).string(m.description);
                    if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                        w.uint32(50).string(m.image);
                    if (m.reissuable != null && Object.hasOwnProperty.call(m, "reissuable"))
                        w.uint32(56).bool(m.reissuable);
                    if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                        w.uint32(64).int64(m.volume);
                    if (m.scriptInfo != null && Object.hasOwnProperty.call(m, "scriptInfo"))
                        $root.vrp.events.StateUpdate.AssetDetails.AssetScriptInfo.encode(m.scriptInfo, w.uint32(74).fork()).ldelim();
                    if (m.sponsorship != null && Object.hasOwnProperty.call(m, "sponsorship"))
                        w.uint32(80).int64(m.sponsorship);
                    if (m.nft != null && Object.hasOwnProperty.call(m, "nft"))
                        w.uint32(88).bool(m.nft);
                    if (m.lastUpdated != null && Object.hasOwnProperty.call(m, "lastUpdated"))
                        w.uint32(96).int32(m.lastUpdated);
                    if (m.safeVolume != null && Object.hasOwnProperty.call(m, "safeVolume"))
                        w.uint32(162).bytes(m.safeVolume);
                    return w;
                };

                AssetDetails.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.AssetDetails();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.assetId = r.bytes();
                            break;
                        case 2:
                            m.issuer = r.bytes();
                            break;
                        case 3:
                            m.decimals = r.int32();
                            break;
                        case 4:
                            m.name = r.string();
                            break;
                        case 5:
                            m.description = r.string();
                            break;
                        case 6:
                            m.image = r.string();
                            break;
                        case 7:
                            m.reissuable = r.bool();
                            break;
                        case 8:
                            m.volume = r.int64();
                            break;
                        case 9:
                            m.scriptInfo = $root.vrp.events.StateUpdate.AssetDetails.AssetScriptInfo.decode(r, r.uint32());
                            break;
                        case 10:
                            m.sponsorship = r.int64();
                            break;
                        case 11:
                            m.nft = r.bool();
                            break;
                        case 12:
                            m.lastUpdated = r.int32();
                            break;
                        case 20:
                            m.safeVolume = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                AssetDetails.AssetScriptInfo = (function() {

                    function AssetScriptInfo(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    AssetScriptInfo.prototype.script = $util.newBuffer([]);
                    AssetScriptInfo.prototype.complexity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    AssetScriptInfo.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                            w.uint32(10).bytes(m.script);
                        if (m.complexity != null && Object.hasOwnProperty.call(m, "complexity"))
                            w.uint32(16).int64(m.complexity);
                        return w;
                    };

                    AssetScriptInfo.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.AssetDetails.AssetScriptInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.script = r.bytes();
                                break;
                            case 2:
                                m.complexity = r.int64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    return AssetScriptInfo;
                })();

                return AssetDetails;
            })();

            StateUpdate.AssetInfo = (function() {

                function AssetInfo(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AssetInfo.prototype.id = $util.newBuffer([]);
                AssetInfo.prototype.decimals = 0;
                AssetInfo.prototype.name = "";
                AssetInfo.prototype.image = "";

                AssetInfo.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(10).bytes(m.id);
                    if (m.decimals != null && Object.hasOwnProperty.call(m, "decimals"))
                        w.uint32(16).int32(m.decimals);
                    if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                        w.uint32(26).string(m.name);
                    if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                        w.uint32(34).string(m.image);
                    return w;
                };

                AssetInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.StateUpdate.AssetInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = r.bytes();
                            break;
                        case 2:
                            m.decimals = r.int32();
                            break;
                        case 3:
                            m.name = r.string();
                            break;
                        case 4:
                            m.image = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return AssetInfo;
            })();

            return StateUpdate;
        })();

        events.TransactionMetadata = (function() {

            function TransactionMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            TransactionMetadata.prototype.transfer = null;
            TransactionMetadata.prototype.exchange = null;
            TransactionMetadata.prototype.massTransfer = null;
            TransactionMetadata.prototype.invokeScript = null;
            TransactionMetadata.prototype.leaseMeta = null;
            TransactionMetadata.prototype.ethereum = null;

            var $oneOfFields;

            Object.defineProperty(TransactionMetadata.prototype, "metadata", {
                get: $util.oneOfGetter($oneOfFields = ["transfer", "exchange", "massTransfer", "invokeScript", "leaseMeta", "ethereum"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            TransactionMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.transfer != null && Object.hasOwnProperty.call(m, "transfer"))
                    $root.vrp.events.TransactionMetadata.TransferMetadata.encode(m.transfer, w.uint32(834).fork()).ldelim();
                if (m.exchange != null && Object.hasOwnProperty.call(m, "exchange"))
                    $root.vrp.events.TransactionMetadata.ExchangeMetadata.encode(m.exchange, w.uint32(858).fork()).ldelim();
                if (m.massTransfer != null && Object.hasOwnProperty.call(m, "massTransfer"))
                    $root.vrp.events.TransactionMetadata.MassTransferMetadata.encode(m.massTransfer, w.uint32(890).fork()).ldelim();
                if (m.invokeScript != null && Object.hasOwnProperty.call(m, "invokeScript"))
                    $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.encode(m.invokeScript, w.uint32(930).fork()).ldelim();
                if (m.leaseMeta != null && Object.hasOwnProperty.call(m, "leaseMeta"))
                    $root.vrp.events.TransactionMetadata.LeaseMetadata.encode(m.leaseMeta, w.uint32(938).fork()).ldelim();
                if (m.ethereum != null && Object.hasOwnProperty.call(m, "ethereum"))
                    $root.vrp.events.TransactionMetadata.EthereumMetadata.encode(m.ethereum, w.uint32(2410).fork()).ldelim();
                return w;
            };

            TransactionMetadata.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 104:
                        m.transfer = $root.vrp.events.TransactionMetadata.TransferMetadata.decode(r, r.uint32());
                        break;
                    case 107:
                        m.exchange = $root.vrp.events.TransactionMetadata.ExchangeMetadata.decode(r, r.uint32());
                        break;
                    case 111:
                        m.massTransfer = $root.vrp.events.TransactionMetadata.MassTransferMetadata.decode(r, r.uint32());
                        break;
                    case 116:
                        m.invokeScript = $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.decode(r, r.uint32());
                        break;
                    case 117:
                        m.leaseMeta = $root.vrp.events.TransactionMetadata.LeaseMetadata.decode(r, r.uint32());
                        break;
                    case 301:
                        m.ethereum = $root.vrp.events.TransactionMetadata.EthereumMetadata.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            TransactionMetadata.TransferMetadata = (function() {

                function TransferMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                TransferMetadata.prototype.recipientAddress = $util.newBuffer([]);

                TransferMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                        w.uint32(10).bytes(m.recipientAddress);
                    return w;
                };

                TransferMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.TransferMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.recipientAddress = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return TransferMetadata;
            })();

            TransactionMetadata.MassTransferMetadata = (function() {

                function MassTransferMetadata(p) {
                    this.recipientsAddresses = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                MassTransferMetadata.prototype.recipientsAddresses = $util.emptyArray;

                MassTransferMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.recipientsAddresses != null && m.recipientsAddresses.length) {
                        for (var i = 0; i < m.recipientsAddresses.length; ++i)
                            w.uint32(10).bytes(m.recipientsAddresses[i]);
                    }
                    return w;
                };

                MassTransferMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.MassTransferMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            if (!(m.recipientsAddresses && m.recipientsAddresses.length))
                                m.recipientsAddresses = [];
                            m.recipientsAddresses.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return MassTransferMetadata;
            })();

            TransactionMetadata.ExchangeMetadata = (function() {

                function ExchangeMetadata(p) {
                    this.orderIds = [];
                    this.orderSenderAddresses = [];
                    this.orderSenderPublicKeys = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                ExchangeMetadata.prototype.orderIds = $util.emptyArray;
                ExchangeMetadata.prototype.orderSenderAddresses = $util.emptyArray;
                ExchangeMetadata.prototype.orderSenderPublicKeys = $util.emptyArray;

                ExchangeMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.orderIds != null && m.orderIds.length) {
                        for (var i = 0; i < m.orderIds.length; ++i)
                            w.uint32(10).bytes(m.orderIds[i]);
                    }
                    if (m.orderSenderAddresses != null && m.orderSenderAddresses.length) {
                        for (var i = 0; i < m.orderSenderAddresses.length; ++i)
                            w.uint32(18).bytes(m.orderSenderAddresses[i]);
                    }
                    if (m.orderSenderPublicKeys != null && m.orderSenderPublicKeys.length) {
                        for (var i = 0; i < m.orderSenderPublicKeys.length; ++i)
                            w.uint32(26).bytes(m.orderSenderPublicKeys[i]);
                    }
                    return w;
                };

                ExchangeMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.ExchangeMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            if (!(m.orderIds && m.orderIds.length))
                                m.orderIds = [];
                            m.orderIds.push(r.bytes());
                            break;
                        case 2:
                            if (!(m.orderSenderAddresses && m.orderSenderAddresses.length))
                                m.orderSenderAddresses = [];
                            m.orderSenderAddresses.push(r.bytes());
                            break;
                        case 3:
                            if (!(m.orderSenderPublicKeys && m.orderSenderPublicKeys.length))
                                m.orderSenderPublicKeys = [];
                            m.orderSenderPublicKeys.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return ExchangeMetadata;
            })();

            TransactionMetadata.InvokeScriptMetadata = (function() {

                function InvokeScriptMetadata(p) {
                    this["arguments"] = [];
                    this.payments = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                InvokeScriptMetadata.prototype.dAppAddress = $util.newBuffer([]);
                InvokeScriptMetadata.prototype.functionName = "";
                InvokeScriptMetadata.prototype["arguments"] = $util.emptyArray;
                InvokeScriptMetadata.prototype.payments = $util.emptyArray;
                InvokeScriptMetadata.prototype.result = null;

                InvokeScriptMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.dAppAddress != null && Object.hasOwnProperty.call(m, "dAppAddress"))
                        w.uint32(10).bytes(m.dAppAddress);
                    if (m.functionName != null && Object.hasOwnProperty.call(m, "functionName"))
                        w.uint32(18).string(m.functionName);
                    if (m["arguments"] != null && m["arguments"].length) {
                        for (var i = 0; i < m["arguments"].length; ++i)
                            $root.vrp.InvokeScriptResult.Call.Argument.encode(m["arguments"][i], w.uint32(26).fork()).ldelim();
                    }
                    if (m.payments != null && m.payments.length) {
                        for (var i = 0; i < m.payments.length; ++i)
                            $root.vrp.Amount.encode(m.payments[i], w.uint32(34).fork()).ldelim();
                    }
                    if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                        $root.vrp.InvokeScriptResult.encode(m.result, w.uint32(42).fork()).ldelim();
                    return w;
                };

                InvokeScriptMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.InvokeScriptMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.dAppAddress = r.bytes();
                            break;
                        case 2:
                            m.functionName = r.string();
                            break;
                        case 3:
                            if (!(m["arguments"] && m["arguments"].length))
                                m["arguments"] = [];
                            m["arguments"].push($root.vrp.InvokeScriptResult.Call.Argument.decode(r, r.uint32()));
                            break;
                        case 4:
                            if (!(m.payments && m.payments.length))
                                m.payments = [];
                            m.payments.push($root.vrp.Amount.decode(r, r.uint32()));
                            break;
                        case 5:
                            m.result = $root.vrp.InvokeScriptResult.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                InvokeScriptMetadata.Argument = (function() {

                    function Argument(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    Argument.prototype.integerValue = null;
                    Argument.prototype.binaryValue = null;
                    Argument.prototype.stringValue = null;
                    Argument.prototype.booleanValue = null;
                    Argument.prototype.list = null;

                    var $oneOfFields;

                    Object.defineProperty(Argument.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["integerValue", "binaryValue", "stringValue", "booleanValue", "list"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    Argument.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.integerValue != null && Object.hasOwnProperty.call(m, "integerValue"))
                            w.uint32(8).int64(m.integerValue);
                        if (m.binaryValue != null && Object.hasOwnProperty.call(m, "binaryValue"))
                            w.uint32(18).bytes(m.binaryValue);
                        if (m.stringValue != null && Object.hasOwnProperty.call(m, "stringValue"))
                            w.uint32(26).string(m.stringValue);
                        if (m.booleanValue != null && Object.hasOwnProperty.call(m, "booleanValue"))
                            w.uint32(32).bool(m.booleanValue);
                        if (m.list != null && Object.hasOwnProperty.call(m, "list"))
                            $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.List.encode(m.list, w.uint32(82).fork()).ldelim();
                        return w;
                    };

                    Argument.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.integerValue = r.int64();
                                break;
                            case 2:
                                m.binaryValue = r.bytes();
                                break;
                            case 3:
                                m.stringValue = r.string();
                                break;
                            case 4:
                                m.booleanValue = r.bool();
                                break;
                            case 10:
                                m.list = $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.List.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    Argument.List = (function() {

                        function List(p) {
                            this.items = [];
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null)
                                        this[ks[i]] = p[ks[i]];
                        }

                        List.prototype.items = $util.emptyArray;

                        List.encode = function encode(m, w) {
                            if (!w)
                                w = $Writer.create();
                            if (m.items != null && m.items.length) {
                                for (var i = 0; i < m.items.length; ++i)
                                    $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.encode(m.items[i], w.uint32(10).fork()).ldelim();
                            }
                            return w;
                        };

                        List.decode = function decode(r, l) {
                            if (!(r instanceof $Reader))
                                r = $Reader.create(r);
                            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.List();
                            while (r.pos < c) {
                                var t = r.uint32();
                                switch (t >>> 3) {
                                case 1:
                                    if (!(m.items && m.items.length))
                                        m.items = [];
                                    m.items.push($root.vrp.events.TransactionMetadata.InvokeScriptMetadata.Argument.decode(r, r.uint32()));
                                    break;
                                default:
                                    r.skipType(t & 7);
                                    break;
                                }
                            }
                            return m;
                        };

                        return List;
                    })();

                    return Argument;
                })();

                return InvokeScriptMetadata;
            })();

            TransactionMetadata.LeaseMetadata = (function() {

                function LeaseMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                LeaseMetadata.prototype.recipientAddress = $util.newBuffer([]);

                LeaseMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                        w.uint32(10).bytes(m.recipientAddress);
                    return w;
                };

                LeaseMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.LeaseMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.recipientAddress = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return LeaseMetadata;
            })();

            TransactionMetadata.EthereumTransferMetadata = (function() {

                function EthereumTransferMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                EthereumTransferMetadata.prototype.recipientAddress = $util.newBuffer([]);
                EthereumTransferMetadata.prototype.amount = null;

                EthereumTransferMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                        w.uint32(10).bytes(m.recipientAddress);
                    if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                        $root.vrp.Amount.encode(m.amount, w.uint32(18).fork()).ldelim();
                    return w;
                };

                EthereumTransferMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.EthereumTransferMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.recipientAddress = r.bytes();
                            break;
                        case 2:
                            m.amount = $root.vrp.Amount.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return EthereumTransferMetadata;
            })();

            TransactionMetadata.EthereumMetadata = (function() {

                function EthereumMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                EthereumMetadata.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                EthereumMetadata.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                EthereumMetadata.prototype.senderPublicKey = $util.newBuffer([]);
                EthereumMetadata.prototype.transfer = null;
                EthereumMetadata.prototype.invoke = null;

                var $oneOfFields;

                Object.defineProperty(EthereumMetadata.prototype, "Action", {
                    get: $util.oneOfGetter($oneOfFields = ["transfer", "invoke"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                EthereumMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                        w.uint32(16).int64(m.timestamp);
                    if (m.fee != null && Object.hasOwnProperty.call(m, "fee"))
                        w.uint32(24).int64(m.fee);
                    if (m.senderPublicKey != null && Object.hasOwnProperty.call(m, "senderPublicKey"))
                        w.uint32(34).bytes(m.senderPublicKey);
                    if (m.transfer != null && Object.hasOwnProperty.call(m, "transfer"))
                        $root.vrp.events.TransactionMetadata.EthereumTransferMetadata.encode(m.transfer, w.uint32(82).fork()).ldelim();
                    if (m.invoke != null && Object.hasOwnProperty.call(m, "invoke"))
                        $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.encode(m.invoke, w.uint32(90).fork()).ldelim();
                    return w;
                };

                EthereumMetadata.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.TransactionMetadata.EthereumMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 2:
                            m.timestamp = r.int64();
                            break;
                        case 3:
                            m.fee = r.int64();
                            break;
                        case 4:
                            m.senderPublicKey = r.bytes();
                            break;
                        case 10:
                            m.transfer = $root.vrp.events.TransactionMetadata.EthereumTransferMetadata.decode(r, r.uint32());
                            break;
                        case 11:
                            m.invoke = $root.vrp.events.TransactionMetadata.InvokeScriptMetadata.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return EthereumMetadata;
            })();

            return TransactionMetadata;
        })();

        events.grpc = (function() {

            var grpc = {};

            grpc.BlockchainUpdatesApi = (function() {

                function BlockchainUpdatesApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (BlockchainUpdatesApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BlockchainUpdatesApi;


                Object.defineProperty(BlockchainUpdatesApi.prototype.getBlockUpdate = function getBlockUpdate(request, callback) {
                    return this.rpcCall(getBlockUpdate, $root.vrp.events.grpc.GetBlockUpdateRequest, $root.vrp.events.grpc.GetBlockUpdateResponse, request, callback);
                }, "name", { value: "GetBlockUpdate" });


                Object.defineProperty(BlockchainUpdatesApi.prototype.getBlockUpdatesRange = function getBlockUpdatesRange(request, callback) {
                    return this.rpcCall(getBlockUpdatesRange, $root.vrp.events.grpc.GetBlockUpdatesRangeRequest, $root.vrp.events.grpc.GetBlockUpdatesRangeResponse, request, callback);
                }, "name", { value: "GetBlockUpdatesRange" });


                Object.defineProperty(BlockchainUpdatesApi.prototype.subscribe = function subscribe(request, callback) {
                    return this.rpcCall(subscribe, $root.vrp.events.grpc.SubscribeRequest, $root.vrp.events.grpc.SubscribeEvent, request, callback);
                }, "name", { value: "Subscribe" });

                return BlockchainUpdatesApi;
            })();

            grpc.GetBlockUpdateRequest = (function() {

                function GetBlockUpdateRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                GetBlockUpdateRequest.prototype.height = 0;

                GetBlockUpdateRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(8).int32(m.height);
                    return w;
                };

                GetBlockUpdateRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.GetBlockUpdateRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.height = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return GetBlockUpdateRequest;
            })();

            grpc.GetBlockUpdateResponse = (function() {

                function GetBlockUpdateResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                GetBlockUpdateResponse.prototype.update = null;

                GetBlockUpdateResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.update != null && Object.hasOwnProperty.call(m, "update"))
                        $root.vrp.events.BlockchainUpdated.encode(m.update, w.uint32(10).fork()).ldelim();
                    return w;
                };

                GetBlockUpdateResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.GetBlockUpdateResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.update = $root.vrp.events.BlockchainUpdated.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return GetBlockUpdateResponse;
            })();

            grpc.GetBlockUpdatesRangeRequest = (function() {

                function GetBlockUpdatesRangeRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                GetBlockUpdatesRangeRequest.prototype.fromHeight = 0;
                GetBlockUpdatesRangeRequest.prototype.toHeight = 0;

                GetBlockUpdatesRangeRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.fromHeight != null && Object.hasOwnProperty.call(m, "fromHeight"))
                        w.uint32(8).int32(m.fromHeight);
                    if (m.toHeight != null && Object.hasOwnProperty.call(m, "toHeight"))
                        w.uint32(16).int32(m.toHeight);
                    return w;
                };

                GetBlockUpdatesRangeRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.GetBlockUpdatesRangeRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.fromHeight = r.int32();
                            break;
                        case 2:
                            m.toHeight = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return GetBlockUpdatesRangeRequest;
            })();

            grpc.GetBlockUpdatesRangeResponse = (function() {

                function GetBlockUpdatesRangeResponse(p) {
                    this.updates = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                GetBlockUpdatesRangeResponse.prototype.updates = $util.emptyArray;

                GetBlockUpdatesRangeResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.updates != null && m.updates.length) {
                        for (var i = 0; i < m.updates.length; ++i)
                            $root.vrp.events.BlockchainUpdated.encode(m.updates[i], w.uint32(10).fork()).ldelim();
                    }
                    return w;
                };

                GetBlockUpdatesRangeResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.GetBlockUpdatesRangeResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            if (!(m.updates && m.updates.length))
                                m.updates = [];
                            m.updates.push($root.vrp.events.BlockchainUpdated.decode(r, r.uint32()));
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return GetBlockUpdatesRangeResponse;
            })();

            grpc.SubscribeRequest = (function() {

                function SubscribeRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                SubscribeRequest.prototype.fromHeight = 0;
                SubscribeRequest.prototype.toHeight = 0;

                SubscribeRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.fromHeight != null && Object.hasOwnProperty.call(m, "fromHeight"))
                        w.uint32(8).int32(m.fromHeight);
                    if (m.toHeight != null && Object.hasOwnProperty.call(m, "toHeight"))
                        w.uint32(16).int32(m.toHeight);
                    return w;
                };

                SubscribeRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.SubscribeRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.fromHeight = r.int32();
                            break;
                        case 2:
                            m.toHeight = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return SubscribeRequest;
            })();

            grpc.SubscribeEvent = (function() {

                function SubscribeEvent(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                SubscribeEvent.prototype.update = null;

                SubscribeEvent.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.update != null && Object.hasOwnProperty.call(m, "update"))
                        $root.vrp.events.BlockchainUpdated.encode(m.update, w.uint32(10).fork()).ldelim();
                    return w;
                };

                SubscribeEvent.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.events.grpc.SubscribeEvent();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.update = $root.vrp.events.BlockchainUpdated.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return SubscribeEvent;
            })();

            return grpc;
        })();

        return events;
    })();

    vrp.InvokeScriptResult = (function() {

        function InvokeScriptResult(p) {
            this.data = [];
            this.transfers = [];
            this.issues = [];
            this.reissues = [];
            this.burns = [];
            this.sponsorFees = [];
            this.leases = [];
            this.leaseCancels = [];
            this.invokes = [];
            this.privatePayment = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        InvokeScriptResult.prototype.data = $util.emptyArray;
        InvokeScriptResult.prototype.transfers = $util.emptyArray;
        InvokeScriptResult.prototype.issues = $util.emptyArray;
        InvokeScriptResult.prototype.reissues = $util.emptyArray;
        InvokeScriptResult.prototype.burns = $util.emptyArray;
        InvokeScriptResult.prototype.errorMessage = null;
        InvokeScriptResult.prototype.sponsorFees = $util.emptyArray;
        InvokeScriptResult.prototype.leases = $util.emptyArray;
        InvokeScriptResult.prototype.leaseCancels = $util.emptyArray;
        InvokeScriptResult.prototype.invokes = $util.emptyArray;
        InvokeScriptResult.prototype.privatePayment = $util.emptyArray;

        InvokeScriptResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.data != null && m.data.length) {
                for (var i = 0; i < m.data.length; ++i)
                    $root.vrp.DataTransactionData.DataEntry.encode(m.data[i], w.uint32(10).fork()).ldelim();
            }
            if (m.transfers != null && m.transfers.length) {
                for (var i = 0; i < m.transfers.length; ++i)
                    $root.vrp.InvokeScriptResult.Payment.encode(m.transfers[i], w.uint32(18).fork()).ldelim();
            }
            if (m.issues != null && m.issues.length) {
                for (var i = 0; i < m.issues.length; ++i)
                    $root.vrp.InvokeScriptResult.Issue.encode(m.issues[i], w.uint32(26).fork()).ldelim();
            }
            if (m.reissues != null && m.reissues.length) {
                for (var i = 0; i < m.reissues.length; ++i)
                    $root.vrp.InvokeScriptResult.Reissue.encode(m.reissues[i], w.uint32(34).fork()).ldelim();
            }
            if (m.burns != null && m.burns.length) {
                for (var i = 0; i < m.burns.length; ++i)
                    $root.vrp.InvokeScriptResult.Burn.encode(m.burns[i], w.uint32(42).fork()).ldelim();
            }
            if (m.errorMessage != null && Object.hasOwnProperty.call(m, "errorMessage"))
                $root.vrp.InvokeScriptResult.ErrorMessage.encode(m.errorMessage, w.uint32(50).fork()).ldelim();
            if (m.sponsorFees != null && m.sponsorFees.length) {
                for (var i = 0; i < m.sponsorFees.length; ++i)
                    $root.vrp.InvokeScriptResult.SponsorFee.encode(m.sponsorFees[i], w.uint32(58).fork()).ldelim();
            }
            if (m.leases != null && m.leases.length) {
                for (var i = 0; i < m.leases.length; ++i)
                    $root.vrp.InvokeScriptResult.Lease.encode(m.leases[i], w.uint32(66).fork()).ldelim();
            }
            if (m.leaseCancels != null && m.leaseCancels.length) {
                for (var i = 0; i < m.leaseCancels.length; ++i)
                    $root.vrp.InvokeScriptResult.LeaseCancel.encode(m.leaseCancels[i], w.uint32(74).fork()).ldelim();
            }
            if (m.invokes != null && m.invokes.length) {
                for (var i = 0; i < m.invokes.length; ++i)
                    $root.vrp.InvokeScriptResult.Invocation.encode(m.invokes[i], w.uint32(82).fork()).ldelim();
            }
            if (m.privatePayment != null && m.privatePayment.length) {
                for (var i = 0; i < m.privatePayment.length; ++i)
                    $root.vrp.InvokeScriptResult.PrivatePayment.encode(m.privatePayment[i], w.uint32(90).fork()).ldelim();
            }
            return w;
        };

        InvokeScriptResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.data && m.data.length))
                        m.data = [];
                    m.data.push($root.vrp.DataTransactionData.DataEntry.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.transfers && m.transfers.length))
                        m.transfers = [];
                    m.transfers.push($root.vrp.InvokeScriptResult.Payment.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.issues && m.issues.length))
                        m.issues = [];
                    m.issues.push($root.vrp.InvokeScriptResult.Issue.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.reissues && m.reissues.length))
                        m.reissues = [];
                    m.reissues.push($root.vrp.InvokeScriptResult.Reissue.decode(r, r.uint32()));
                    break;
                case 5:
                    if (!(m.burns && m.burns.length))
                        m.burns = [];
                    m.burns.push($root.vrp.InvokeScriptResult.Burn.decode(r, r.uint32()));
                    break;
                case 6:
                    m.errorMessage = $root.vrp.InvokeScriptResult.ErrorMessage.decode(r, r.uint32());
                    break;
                case 7:
                    if (!(m.sponsorFees && m.sponsorFees.length))
                        m.sponsorFees = [];
                    m.sponsorFees.push($root.vrp.InvokeScriptResult.SponsorFee.decode(r, r.uint32()));
                    break;
                case 8:
                    if (!(m.leases && m.leases.length))
                        m.leases = [];
                    m.leases.push($root.vrp.InvokeScriptResult.Lease.decode(r, r.uint32()));
                    break;
                case 9:
                    if (!(m.leaseCancels && m.leaseCancels.length))
                        m.leaseCancels = [];
                    m.leaseCancels.push($root.vrp.InvokeScriptResult.LeaseCancel.decode(r, r.uint32()));
                    break;
                case 10:
                    if (!(m.invokes && m.invokes.length))
                        m.invokes = [];
                    m.invokes.push($root.vrp.InvokeScriptResult.Invocation.decode(r, r.uint32()));
                    break;
                case 11:
                    if (!(m.privatePayment && m.privatePayment.length))
                        m.privatePayment = [];
                    m.privatePayment.push($root.vrp.InvokeScriptResult.PrivatePayment.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        InvokeScriptResult.Payment = (function() {

            function Payment(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Payment.prototype.address = $util.newBuffer([]);
            Payment.prototype.amount = null;

            Payment.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                    w.uint32(10).bytes(m.address);
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    $root.vrp.Amount.encode(m.amount, w.uint32(18).fork()).ldelim();
                return w;
            };

            Payment.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Payment();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.address = r.bytes();
                        break;
                    case 2:
                        m.amount = $root.vrp.Amount.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Payment;
        })();

        InvokeScriptResult.PrivatePayment = (function() {

            function PrivatePayment(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            PrivatePayment.prototype.address = $util.newBuffer([]);
            PrivatePayment.prototype.amount = null;

            PrivatePayment.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                    w.uint32(10).bytes(m.address);
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    $root.vrp.Amount.encode(m.amount, w.uint32(18).fork()).ldelim();
                return w;
            };

            PrivatePayment.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.PrivatePayment();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.address = r.bytes();
                        break;
                    case 2:
                        m.amount = $root.vrp.Amount.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return PrivatePayment;
        })();

        InvokeScriptResult.Issue = (function() {

            function Issue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Issue.prototype.assetId = $util.newBuffer([]);
            Issue.prototype.name = "";
            Issue.prototype.description = "";
            Issue.prototype.image = "";
            Issue.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Issue.prototype.decimals = 0;
            Issue.prototype.reissuable = false;
            Issue.prototype.script = $util.newBuffer([]);
            Issue.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            Issue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                    w.uint32(10).bytes(m.assetId);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                    w.uint32(26).string(m.description);
                if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                    w.uint32(34).string(m.image);
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    w.uint32(40).int64(m.amount);
                if (m.decimals != null && Object.hasOwnProperty.call(m, "decimals"))
                    w.uint32(48).int32(m.decimals);
                if (m.reissuable != null && Object.hasOwnProperty.call(m, "reissuable"))
                    w.uint32(56).bool(m.reissuable);
                if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                    w.uint32(66).bytes(m.script);
                if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                    w.uint32(72).int64(m.nonce);
                return w;
            };

            Issue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Issue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.assetId = r.bytes();
                        break;
                    case 2:
                        m.name = r.string();
                        break;
                    case 3:
                        m.description = r.string();
                        break;
                    case 4:
                        m.image = r.string();
                        break;
                    case 5:
                        m.amount = r.int64();
                        break;
                    case 6:
                        m.decimals = r.int32();
                        break;
                    case 7:
                        m.reissuable = r.bool();
                        break;
                    case 8:
                        m.script = r.bytes();
                        break;
                    case 9:
                        m.nonce = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Issue;
        })();

        InvokeScriptResult.Reissue = (function() {

            function Reissue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Reissue.prototype.assetId = $util.newBuffer([]);
            Reissue.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Reissue.prototype.isReissuable = false;

            Reissue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                    w.uint32(10).bytes(m.assetId);
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    w.uint32(16).int64(m.amount);
                if (m.isReissuable != null && Object.hasOwnProperty.call(m, "isReissuable"))
                    w.uint32(24).bool(m.isReissuable);
                return w;
            };

            Reissue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Reissue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.assetId = r.bytes();
                        break;
                    case 2:
                        m.amount = r.int64();
                        break;
                    case 3:
                        m.isReissuable = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Reissue;
        })();

        InvokeScriptResult.Burn = (function() {

            function Burn(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Burn.prototype.assetId = $util.newBuffer([]);
            Burn.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            Burn.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                    w.uint32(10).bytes(m.assetId);
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    w.uint32(16).int64(m.amount);
                return w;
            };

            Burn.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Burn();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.assetId = r.bytes();
                        break;
                    case 2:
                        m.amount = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Burn;
        })();

        InvokeScriptResult.SponsorFee = (function() {

            function SponsorFee(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            SponsorFee.prototype.minFee = null;

            SponsorFee.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.minFee != null && Object.hasOwnProperty.call(m, "minFee"))
                    $root.vrp.Amount.encode(m.minFee, w.uint32(10).fork()).ldelim();
                return w;
            };

            SponsorFee.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.SponsorFee();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.minFee = $root.vrp.Amount.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return SponsorFee;
        })();

        InvokeScriptResult.Lease = (function() {

            function Lease(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Lease.prototype.recipient = null;
            Lease.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Lease.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Lease.prototype.leaseId = $util.newBuffer([]);

            Lease.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                    $root.vrp.Recipient.encode(m.recipient, w.uint32(10).fork()).ldelim();
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    w.uint32(16).int64(m.amount);
                if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                    w.uint32(24).int64(m.nonce);
                if (m.leaseId != null && Object.hasOwnProperty.call(m, "leaseId"))
                    w.uint32(34).bytes(m.leaseId);
                return w;
            };

            Lease.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Lease();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                        break;
                    case 2:
                        m.amount = r.int64();
                        break;
                    case 3:
                        m.nonce = r.int64();
                        break;
                    case 4:
                        m.leaseId = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Lease;
        })();

        InvokeScriptResult.LeaseCancel = (function() {

            function LeaseCancel(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            LeaseCancel.prototype.leaseId = $util.newBuffer([]);

            LeaseCancel.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.leaseId != null && Object.hasOwnProperty.call(m, "leaseId"))
                    w.uint32(10).bytes(m.leaseId);
                return w;
            };

            LeaseCancel.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.LeaseCancel();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.leaseId = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return LeaseCancel;
        })();

        InvokeScriptResult.ErrorMessage = (function() {

            function ErrorMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            ErrorMessage.prototype.code = 0;
            ErrorMessage.prototype.text = "";

            ErrorMessage.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(8).int32(m.code);
                if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                    w.uint32(18).string(m.text);
                return w;
            };

            ErrorMessage.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.ErrorMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.code = r.int32();
                        break;
                    case 2:
                        m.text = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return ErrorMessage;
        })();

        InvokeScriptResult.Call = (function() {

            function Call(p) {
                this.argsBytes = [];
                this.args = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Call.prototype["function"] = "";
            Call.prototype.argsBytes = $util.emptyArray;
            Call.prototype.args = $util.emptyArray;

            Call.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m["function"] != null && Object.hasOwnProperty.call(m, "function"))
                    w.uint32(10).string(m["function"]);
                if (m.argsBytes != null && m.argsBytes.length) {
                    for (var i = 0; i < m.argsBytes.length; ++i)
                        w.uint32(18).bytes(m.argsBytes[i]);
                }
                if (m.args != null && m.args.length) {
                    for (var i = 0; i < m.args.length; ++i)
                        $root.vrp.InvokeScriptResult.Call.Argument.encode(m.args[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };

            Call.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Call();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m["function"] = r.string();
                        break;
                    case 2:
                        if (!(m.argsBytes && m.argsBytes.length))
                            m.argsBytes = [];
                        m.argsBytes.push(r.bytes());
                        break;
                    case 3:
                        if (!(m.args && m.args.length))
                            m.args = [];
                        m.args.push($root.vrp.InvokeScriptResult.Call.Argument.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            Call.Argument = (function() {

                function Argument(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                Argument.prototype.integerValue = null;
                Argument.prototype.binaryValue = null;
                Argument.prototype.stringValue = null;
                Argument.prototype.booleanValue = null;
                Argument.prototype.caseObj = null;
                Argument.prototype.list = null;

                var $oneOfFields;

                Object.defineProperty(Argument.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["integerValue", "binaryValue", "stringValue", "booleanValue", "caseObj", "list"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Argument.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.integerValue != null && Object.hasOwnProperty.call(m, "integerValue"))
                        w.uint32(8).int64(m.integerValue);
                    if (m.binaryValue != null && Object.hasOwnProperty.call(m, "binaryValue"))
                        w.uint32(18).bytes(m.binaryValue);
                    if (m.stringValue != null && Object.hasOwnProperty.call(m, "stringValue"))
                        w.uint32(26).string(m.stringValue);
                    if (m.booleanValue != null && Object.hasOwnProperty.call(m, "booleanValue"))
                        w.uint32(32).bool(m.booleanValue);
                    if (m.caseObj != null && Object.hasOwnProperty.call(m, "caseObj"))
                        w.uint32(42).bytes(m.caseObj);
                    if (m.list != null && Object.hasOwnProperty.call(m, "list"))
                        $root.vrp.InvokeScriptResult.Call.Argument.List.encode(m.list, w.uint32(82).fork()).ldelim();
                    return w;
                };

                Argument.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Call.Argument();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.integerValue = r.int64();
                            break;
                        case 2:
                            m.binaryValue = r.bytes();
                            break;
                        case 3:
                            m.stringValue = r.string();
                            break;
                        case 4:
                            m.booleanValue = r.bool();
                            break;
                        case 5:
                            m.caseObj = r.bytes();
                            break;
                        case 10:
                            m.list = $root.vrp.InvokeScriptResult.Call.Argument.List.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                Argument.List = (function() {

                    function List(p) {
                        this.items = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    List.prototype.items = $util.emptyArray;

                    List.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.items != null && m.items.length) {
                            for (var i = 0; i < m.items.length; ++i)
                                $root.vrp.InvokeScriptResult.Call.Argument.encode(m.items[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    List.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Call.Argument.List();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                if (!(m.items && m.items.length))
                                    m.items = [];
                                m.items.push($root.vrp.InvokeScriptResult.Call.Argument.decode(r, r.uint32()));
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    return List;
                })();

                return Argument;
            })();

            return Call;
        })();

        InvokeScriptResult.Invocation = (function() {

            function Invocation(p) {
                this.payments = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Invocation.prototype.dApp = $util.newBuffer([]);
            Invocation.prototype.call = null;
            Invocation.prototype.payments = $util.emptyArray;
            Invocation.prototype.stateChanges = null;

            Invocation.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.dApp != null && Object.hasOwnProperty.call(m, "dApp"))
                    w.uint32(10).bytes(m.dApp);
                if (m.call != null && Object.hasOwnProperty.call(m, "call"))
                    $root.vrp.InvokeScriptResult.Call.encode(m.call, w.uint32(18).fork()).ldelim();
                if (m.payments != null && m.payments.length) {
                    for (var i = 0; i < m.payments.length; ++i)
                        $root.vrp.Amount.encode(m.payments[i], w.uint32(26).fork()).ldelim();
                }
                if (m.stateChanges != null && Object.hasOwnProperty.call(m, "stateChanges"))
                    $root.vrp.InvokeScriptResult.encode(m.stateChanges, w.uint32(34).fork()).ldelim();
                return w;
            };

            Invocation.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptResult.Invocation();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.dApp = r.bytes();
                        break;
                    case 2:
                        m.call = $root.vrp.InvokeScriptResult.Call.decode(r, r.uint32());
                        break;
                    case 3:
                        if (!(m.payments && m.payments.length))
                            m.payments = [];
                        m.payments.push($root.vrp.Amount.decode(r, r.uint32()));
                        break;
                    case 4:
                        m.stateChanges = $root.vrp.InvokeScriptResult.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Invocation;
        })();

        return InvokeScriptResult;
    })();

    vrp.node = (function() {

        var node = {};

        node.grpc = (function() {

            var grpc = {};

            grpc.AccountsApi = (function() {

                function AccountsApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AccountsApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountsApi;


                Object.defineProperty(AccountsApi.prototype.getBalances = function getBalances(request, callback) {
                    return this.rpcCall(getBalances, $root.vrp.node.grpc.BalancesRequest, $root.vrp.node.grpc.BalanceResponse, request, callback);
                }, "name", { value: "GetBalances" });


                Object.defineProperty(AccountsApi.prototype.getScript = function getScript(request, callback) {
                    return this.rpcCall(getScript, $root.vrp.node.grpc.AccountRequest, $root.vrp.node.grpc.ScriptData, request, callback);
                }, "name", { value: "GetScript" });


                Object.defineProperty(AccountsApi.prototype.getActiveLeases = function getActiveLeases(request, callback) {
                    return this.rpcCall(getActiveLeases, $root.vrp.node.grpc.AccountRequest, $root.vrp.node.grpc.LeaseResponse, request, callback);
                }, "name", { value: "GetActiveLeases" });


                Object.defineProperty(AccountsApi.prototype.getDataEntries = function getDataEntries(request, callback) {
                    return this.rpcCall(getDataEntries, $root.vrp.node.grpc.DataRequest, $root.vrp.node.grpc.DataEntryResponse, request, callback);
                }, "name", { value: "GetDataEntries" });


                Object.defineProperty(AccountsApi.prototype.resolveAlias = function resolveAlias(request, callback) {
                    return this.rpcCall(resolveAlias, $root.google.protobuf.StringValue, $root.google.protobuf.BytesValue, request, callback);
                }, "name", { value: "ResolveAlias" });

                return AccountsApi;
            })();

            grpc.AccountRequest = (function() {

                function AccountRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AccountRequest.prototype.address = $util.newBuffer([]);

                AccountRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    return w;
                };

                AccountRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.AccountRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return AccountRequest;
            })();

            grpc.DataRequest = (function() {

                function DataRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                DataRequest.prototype.address = $util.newBuffer([]);
                DataRequest.prototype.key = "";

                DataRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                        w.uint32(18).string(m.key);
                    return w;
                };

                DataRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.DataRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.key = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return DataRequest;
            })();

            grpc.BalancesRequest = (function() {

                function BalancesRequest(p) {
                    this.assets = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BalancesRequest.prototype.address = $util.newBuffer([]);
                BalancesRequest.prototype.assets = $util.emptyArray;

                BalancesRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.assets != null && m.assets.length) {
                        for (var i = 0; i < m.assets.length; ++i)
                            w.uint32(34).bytes(m.assets[i]);
                    }
                    return w;
                };

                BalancesRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BalancesRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 4:
                            if (!(m.assets && m.assets.length))
                                m.assets = [];
                            m.assets.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BalancesRequest;
            })();

            grpc.BalanceResponse = (function() {

                function BalanceResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BalanceResponse.prototype.vrp = null;
                BalanceResponse.prototype.asset = null;

                var $oneOfFields;

                Object.defineProperty(BalanceResponse.prototype, "balance", {
                    get: $util.oneOfGetter($oneOfFields = ["vrp", "asset"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BalanceResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.vrp != null && Object.hasOwnProperty.call(m, "vrp"))
                        $root.vrp.node.grpc.BalanceResponse.VRPBalances.encode(m.vrp, w.uint32(10).fork()).ldelim();
                    if (m.asset != null && Object.hasOwnProperty.call(m, "asset"))
                        $root.vrp.Amount.encode(m.asset, w.uint32(18).fork()).ldelim();
                    return w;
                };

                BalanceResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BalanceResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.vrp = $root.vrp.node.grpc.BalanceResponse.VRPBalances.decode(r, r.uint32());
                            break;
                        case 2:
                            m.asset = $root.vrp.Amount.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                BalanceResponse.VRPBalances = (function() {

                    function VRPBalances(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    VRPBalances.prototype.regular = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    VRPBalances.prototype.generating = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    VRPBalances.prototype.available = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    VRPBalances.prototype.effective = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    VRPBalances.prototype.leaseIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    VRPBalances.prototype.leaseOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    VRPBalances.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.regular != null && Object.hasOwnProperty.call(m, "regular"))
                            w.uint32(8).int64(m.regular);
                        if (m.generating != null && Object.hasOwnProperty.call(m, "generating"))
                            w.uint32(16).int64(m.generating);
                        if (m.available != null && Object.hasOwnProperty.call(m, "available"))
                            w.uint32(24).int64(m.available);
                        if (m.effective != null && Object.hasOwnProperty.call(m, "effective"))
                            w.uint32(32).int64(m.effective);
                        if (m.leaseIn != null && Object.hasOwnProperty.call(m, "leaseIn"))
                            w.uint32(40).int64(m.leaseIn);
                        if (m.leaseOut != null && Object.hasOwnProperty.call(m, "leaseOut"))
                            w.uint32(48).int64(m.leaseOut);
                        return w;
                    };

                    VRPBalances.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BalanceResponse.VRPBalances();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1:
                                m.regular = r.int64();
                                break;
                            case 2:
                                m.generating = r.int64();
                                break;
                            case 3:
                                m.available = r.int64();
                                break;
                            case 4:
                                m.effective = r.int64();
                                break;
                            case 5:
                                m.leaseIn = r.int64();
                                break;
                            case 6:
                                m.leaseOut = r.int64();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    return VRPBalances;
                })();

                return BalanceResponse;
            })();

            grpc.DataEntryResponse = (function() {

                function DataEntryResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                DataEntryResponse.prototype.address = $util.newBuffer([]);
                DataEntryResponse.prototype.entry = null;

                DataEntryResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.entry != null && Object.hasOwnProperty.call(m, "entry"))
                        $root.vrp.DataTransactionData.DataEntry.encode(m.entry, w.uint32(18).fork()).ldelim();
                    return w;
                };

                DataEntryResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.DataEntryResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.entry = $root.vrp.DataTransactionData.DataEntry.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return DataEntryResponse;
            })();

            grpc.ScriptData = (function() {

                function ScriptData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                ScriptData.prototype.scriptBytes = $util.newBuffer([]);
                ScriptData.prototype.scriptText = "";
                ScriptData.prototype.complexity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                ScriptData.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.scriptBytes != null && Object.hasOwnProperty.call(m, "scriptBytes"))
                        w.uint32(10).bytes(m.scriptBytes);
                    if (m.scriptText != null && Object.hasOwnProperty.call(m, "scriptText"))
                        w.uint32(18).string(m.scriptText);
                    if (m.complexity != null && Object.hasOwnProperty.call(m, "complexity"))
                        w.uint32(24).int64(m.complexity);
                    return w;
                };

                ScriptData.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.ScriptData();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.scriptBytes = r.bytes();
                            break;
                        case 2:
                            m.scriptText = r.string();
                            break;
                        case 3:
                            m.complexity = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return ScriptData;
            })();

            grpc.LeaseResponse = (function() {

                function LeaseResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                LeaseResponse.prototype.leaseId = $util.newBuffer([]);
                LeaseResponse.prototype.originTransactionId = $util.newBuffer([]);
                LeaseResponse.prototype.sender = $util.newBuffer([]);
                LeaseResponse.prototype.recipient = null;
                LeaseResponse.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                LeaseResponse.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                LeaseResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.leaseId != null && Object.hasOwnProperty.call(m, "leaseId"))
                        w.uint32(10).bytes(m.leaseId);
                    if (m.originTransactionId != null && Object.hasOwnProperty.call(m, "originTransactionId"))
                        w.uint32(18).bytes(m.originTransactionId);
                    if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
                        w.uint32(26).bytes(m.sender);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                        $root.vrp.Recipient.encode(m.recipient, w.uint32(34).fork()).ldelim();
                    if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                        w.uint32(40).int64(m.amount);
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(48).int64(m.height);
                    return w;
                };

                LeaseResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.LeaseResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.leaseId = r.bytes();
                            break;
                        case 2:
                            m.originTransactionId = r.bytes();
                            break;
                        case 3:
                            m.sender = r.bytes();
                            break;
                        case 4:
                            m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                            break;
                        case 5:
                            m.amount = r.int64();
                            break;
                        case 6:
                            m.height = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return LeaseResponse;
            })();

            grpc.AssetsApi = (function() {

                function AssetsApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AssetsApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AssetsApi;


                Object.defineProperty(AssetsApi.prototype.getInfo = function getInfo(request, callback) {
                    return this.rpcCall(getInfo, $root.vrp.node.grpc.AssetRequest, $root.vrp.node.grpc.AssetInfoResponse, request, callback);
                }, "name", { value: "GetInfo" });


                Object.defineProperty(AssetsApi.prototype.getNFTList = function getNFTList(request, callback) {
                    return this.rpcCall(getNFTList, $root.vrp.node.grpc.NFTRequest, $root.vrp.node.grpc.NFTResponse, request, callback);
                }, "name", { value: "GetNFTList" });

                return AssetsApi;
            })();

            grpc.AssetRequest = (function() {

                function AssetRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AssetRequest.prototype.assetId = $util.newBuffer([]);

                AssetRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                        w.uint32(10).bytes(m.assetId);
                    return w;
                };

                AssetRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.AssetRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.assetId = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return AssetRequest;
            })();

            grpc.NFTRequest = (function() {

                function NFTRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                NFTRequest.prototype.address = $util.newBuffer([]);
                NFTRequest.prototype.limit = 0;
                NFTRequest.prototype.afterAssetId = $util.newBuffer([]);

                NFTRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                        w.uint32(10).bytes(m.address);
                    if (m.limit != null && Object.hasOwnProperty.call(m, "limit"))
                        w.uint32(16).int32(m.limit);
                    if (m.afterAssetId != null && Object.hasOwnProperty.call(m, "afterAssetId"))
                        w.uint32(26).bytes(m.afterAssetId);
                    return w;
                };

                NFTRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.NFTRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.address = r.bytes();
                            break;
                        case 2:
                            m.limit = r.int32();
                            break;
                        case 3:
                            m.afterAssetId = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return NFTRequest;
            })();

            grpc.NFTResponse = (function() {

                function NFTResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                NFTResponse.prototype.assetId = $util.newBuffer([]);
                NFTResponse.prototype.assetInfo = null;

                NFTResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                        w.uint32(10).bytes(m.assetId);
                    if (m.assetInfo != null && Object.hasOwnProperty.call(m, "assetInfo"))
                        $root.vrp.node.grpc.AssetInfoResponse.encode(m.assetInfo, w.uint32(18).fork()).ldelim();
                    return w;
                };

                NFTResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.NFTResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.assetId = r.bytes();
                            break;
                        case 2:
                            m.assetInfo = $root.vrp.node.grpc.AssetInfoResponse.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return NFTResponse;
            })();

            grpc.AssetInfoResponse = (function() {

                function AssetInfoResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                AssetInfoResponse.prototype.issuer = $util.newBuffer([]);
                AssetInfoResponse.prototype.name = "";
                AssetInfoResponse.prototype.description = "";
                AssetInfoResponse.prototype.decimals = 0;
                AssetInfoResponse.prototype.reissuable = false;
                AssetInfoResponse.prototype.totalVolume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                AssetInfoResponse.prototype.script = null;
                AssetInfoResponse.prototype.sponsorship = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                AssetInfoResponse.prototype.issueTransaction = null;
                AssetInfoResponse.prototype.sponsorBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                AssetInfoResponse.prototype.image = "";

                AssetInfoResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.issuer != null && Object.hasOwnProperty.call(m, "issuer"))
                        w.uint32(10).bytes(m.issuer);
                    if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                        w.uint32(18).string(m.name);
                    if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                        w.uint32(26).string(m.description);
                    if (m.decimals != null && Object.hasOwnProperty.call(m, "decimals"))
                        w.uint32(32).int32(m.decimals);
                    if (m.reissuable != null && Object.hasOwnProperty.call(m, "reissuable"))
                        w.uint32(40).bool(m.reissuable);
                    if (m.totalVolume != null && Object.hasOwnProperty.call(m, "totalVolume"))
                        w.uint32(48).int64(m.totalVolume);
                    if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                        $root.vrp.node.grpc.ScriptData.encode(m.script, w.uint32(58).fork()).ldelim();
                    if (m.sponsorship != null && Object.hasOwnProperty.call(m, "sponsorship"))
                        w.uint32(64).int64(m.sponsorship);
                    if (m.sponsorBalance != null && Object.hasOwnProperty.call(m, "sponsorBalance"))
                        w.uint32(80).int64(m.sponsorBalance);
                    if (m.issueTransaction != null && Object.hasOwnProperty.call(m, "issueTransaction"))
                        $root.vrp.SignedTransaction.encode(m.issueTransaction, w.uint32(90).fork()).ldelim();
                    if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                        w.uint32(98).string(m.image);
                    return w;
                };

                AssetInfoResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.AssetInfoResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.issuer = r.bytes();
                            break;
                        case 2:
                            m.name = r.string();
                            break;
                        case 3:
                            m.description = r.string();
                            break;
                        case 4:
                            m.decimals = r.int32();
                            break;
                        case 5:
                            m.reissuable = r.bool();
                            break;
                        case 6:
                            m.totalVolume = r.int64();
                            break;
                        case 7:
                            m.script = $root.vrp.node.grpc.ScriptData.decode(r, r.uint32());
                            break;
                        case 8:
                            m.sponsorship = r.int64();
                            break;
                        case 11:
                            m.issueTransaction = $root.vrp.SignedTransaction.decode(r, r.uint32());
                            break;
                        case 10:
                            m.sponsorBalance = r.int64();
                            break;
                        case 12:
                            m.image = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return AssetInfoResponse;
            })();

            grpc.BlockchainApi = (function() {

                function BlockchainApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (BlockchainApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BlockchainApi;


                Object.defineProperty(BlockchainApi.prototype.getActivationStatus = function getActivationStatus(request, callback) {
                    return this.rpcCall(getActivationStatus, $root.vrp.node.grpc.ActivationStatusRequest, $root.vrp.node.grpc.ActivationStatusResponse, request, callback);
                }, "name", { value: "GetActivationStatus" });


                Object.defineProperty(BlockchainApi.prototype.getBaseTarget = function getBaseTarget(request, callback) {
                    return this.rpcCall(getBaseTarget, $root.google.protobuf.Empty, $root.vrp.node.grpc.BaseTargetResponse, request, callback);
                }, "name", { value: "GetBaseTarget" });


                Object.defineProperty(BlockchainApi.prototype.getCumulativeScore = function getCumulativeScore(request, callback) {
                    return this.rpcCall(getCumulativeScore, $root.google.protobuf.Empty, $root.vrp.node.grpc.ScoreResponse, request, callback);
                }, "name", { value: "GetCumulativeScore" });

                return BlockchainApi;
            })();

            grpc.ActivationStatusRequest = (function() {

                function ActivationStatusRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                ActivationStatusRequest.prototype.height = 0;

                ActivationStatusRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(8).int32(m.height);
                    return w;
                };

                ActivationStatusRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.ActivationStatusRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.height = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return ActivationStatusRequest;
            })();

            grpc.ActivationStatusResponse = (function() {

                function ActivationStatusResponse(p) {
                    this.features = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                ActivationStatusResponse.prototype.height = 0;
                ActivationStatusResponse.prototype.votingInterval = 0;
                ActivationStatusResponse.prototype.votingThreshold = 0;
                ActivationStatusResponse.prototype.nextCheck = 0;
                ActivationStatusResponse.prototype.features = $util.emptyArray;

                ActivationStatusResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(8).int32(m.height);
                    if (m.votingInterval != null && Object.hasOwnProperty.call(m, "votingInterval"))
                        w.uint32(16).int32(m.votingInterval);
                    if (m.votingThreshold != null && Object.hasOwnProperty.call(m, "votingThreshold"))
                        w.uint32(24).int32(m.votingThreshold);
                    if (m.nextCheck != null && Object.hasOwnProperty.call(m, "nextCheck"))
                        w.uint32(32).int32(m.nextCheck);
                    if (m.features != null && m.features.length) {
                        for (var i = 0; i < m.features.length; ++i)
                            $root.vrp.node.grpc.FeatureActivationStatus.encode(m.features[i], w.uint32(42).fork()).ldelim();
                    }
                    return w;
                };

                ActivationStatusResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.ActivationStatusResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.height = r.int32();
                            break;
                        case 2:
                            m.votingInterval = r.int32();
                            break;
                        case 3:
                            m.votingThreshold = r.int32();
                            break;
                        case 4:
                            m.nextCheck = r.int32();
                            break;
                        case 5:
                            if (!(m.features && m.features.length))
                                m.features = [];
                            m.features.push($root.vrp.node.grpc.FeatureActivationStatus.decode(r, r.uint32()));
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return ActivationStatusResponse;
            })();

            grpc.FeatureActivationStatus = (function() {

                function FeatureActivationStatus(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                FeatureActivationStatus.prototype.id = 0;
                FeatureActivationStatus.prototype.description = "";
                FeatureActivationStatus.prototype.blockchainStatus = 0;
                FeatureActivationStatus.prototype.nodeStatus = 0;
                FeatureActivationStatus.prototype.activationHeight = 0;
                FeatureActivationStatus.prototype.supportingBlocks = 0;

                FeatureActivationStatus.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(8).int32(m.id);
                    if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                        w.uint32(18).string(m.description);
                    if (m.blockchainStatus != null && Object.hasOwnProperty.call(m, "blockchainStatus"))
                        w.uint32(24).int32(m.blockchainStatus);
                    if (m.nodeStatus != null && Object.hasOwnProperty.call(m, "nodeStatus"))
                        w.uint32(32).int32(m.nodeStatus);
                    if (m.activationHeight != null && Object.hasOwnProperty.call(m, "activationHeight"))
                        w.uint32(40).int32(m.activationHeight);
                    if (m.supportingBlocks != null && Object.hasOwnProperty.call(m, "supportingBlocks"))
                        w.uint32(48).int32(m.supportingBlocks);
                    return w;
                };

                FeatureActivationStatus.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.FeatureActivationStatus();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = r.int32();
                            break;
                        case 2:
                            m.description = r.string();
                            break;
                        case 3:
                            m.blockchainStatus = r.int32();
                            break;
                        case 4:
                            m.nodeStatus = r.int32();
                            break;
                        case 5:
                            m.activationHeight = r.int32();
                            break;
                        case 6:
                            m.supportingBlocks = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                FeatureActivationStatus.BlockchainFeatureStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNDEFINED"] = 0;
                    values[valuesById[1] = "APPROVED"] = 1;
                    values[valuesById[2] = "ACTIVATED"] = 2;
                    return values;
                })();

                FeatureActivationStatus.NodeFeatureStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NOT_IMPLEMENTED"] = 0;
                    values[valuesById[1] = "IMPLEMENTED"] = 1;
                    values[valuesById[2] = "VOTED"] = 2;
                    return values;
                })();

                return FeatureActivationStatus;
            })();

            grpc.BaseTargetResponse = (function() {

                function BaseTargetResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BaseTargetResponse.prototype.baseTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                BaseTargetResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.baseTarget != null && Object.hasOwnProperty.call(m, "baseTarget"))
                        w.uint32(8).int64(m.baseTarget);
                    return w;
                };

                BaseTargetResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BaseTargetResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.baseTarget = r.int64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BaseTargetResponse;
            })();

            grpc.ScoreResponse = (function() {

                function ScoreResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                ScoreResponse.prototype.score = $util.newBuffer([]);

                ScoreResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                        w.uint32(10).bytes(m.score);
                    return w;
                };

                ScoreResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.ScoreResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.score = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return ScoreResponse;
            })();

            grpc.BlocksApi = (function() {

                function BlocksApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (BlocksApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BlocksApi;


                Object.defineProperty(BlocksApi.prototype.getBlock = function getBlock(request, callback) {
                    return this.rpcCall(getBlock, $root.vrp.node.grpc.BlockRequest, $root.vrp.node.grpc.BlockWithHeight, request, callback);
                }, "name", { value: "GetBlock" });


                Object.defineProperty(BlocksApi.prototype.getBlockRange = function getBlockRange(request, callback) {
                    return this.rpcCall(getBlockRange, $root.vrp.node.grpc.BlockRangeRequest, $root.vrp.node.grpc.BlockWithHeight, request, callback);
                }, "name", { value: "GetBlockRange" });


                Object.defineProperty(BlocksApi.prototype.getCurrentHeight = function getCurrentHeight(request, callback) {
                    return this.rpcCall(getCurrentHeight, $root.google.protobuf.Empty, $root.google.protobuf.UInt32Value, request, callback);
                }, "name", { value: "GetCurrentHeight" });

                return BlocksApi;
            })();

            grpc.BlockRequest = (function() {

                function BlockRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BlockRequest.prototype.blockId = null;
                BlockRequest.prototype.height = null;
                BlockRequest.prototype.reference = null;
                BlockRequest.prototype.includeTransactions = false;

                var $oneOfFields;

                Object.defineProperty(BlockRequest.prototype, "request", {
                    get: $util.oneOfGetter($oneOfFields = ["blockId", "height", "reference"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BlockRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.blockId != null && Object.hasOwnProperty.call(m, "blockId"))
                        w.uint32(10).bytes(m.blockId);
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(16).int32(m.height);
                    if (m.reference != null && Object.hasOwnProperty.call(m, "reference"))
                        w.uint32(26).bytes(m.reference);
                    if (m.includeTransactions != null && Object.hasOwnProperty.call(m, "includeTransactions"))
                        w.uint32(8000).bool(m.includeTransactions);
                    return w;
                };

                BlockRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BlockRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.blockId = r.bytes();
                            break;
                        case 2:
                            m.height = r.int32();
                            break;
                        case 3:
                            m.reference = r.bytes();
                            break;
                        case 1000:
                            m.includeTransactions = r.bool();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BlockRequest;
            })();

            grpc.BlockRangeRequest = (function() {

                function BlockRangeRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BlockRangeRequest.prototype.fromHeight = 0;
                BlockRangeRequest.prototype.toHeight = 0;
                BlockRangeRequest.prototype.generatorPublicKey = null;
                BlockRangeRequest.prototype.generatorAddress = null;
                BlockRangeRequest.prototype.includeTransactions = false;

                var $oneOfFields;

                Object.defineProperty(BlockRangeRequest.prototype, "filter", {
                    get: $util.oneOfGetter($oneOfFields = ["generatorPublicKey", "generatorAddress"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BlockRangeRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.fromHeight != null && Object.hasOwnProperty.call(m, "fromHeight"))
                        w.uint32(8).uint32(m.fromHeight);
                    if (m.toHeight != null && Object.hasOwnProperty.call(m, "toHeight"))
                        w.uint32(16).uint32(m.toHeight);
                    if (m.generatorPublicKey != null && Object.hasOwnProperty.call(m, "generatorPublicKey"))
                        w.uint32(26).bytes(m.generatorPublicKey);
                    if (m.generatorAddress != null && Object.hasOwnProperty.call(m, "generatorAddress"))
                        w.uint32(34).bytes(m.generatorAddress);
                    if (m.includeTransactions != null && Object.hasOwnProperty.call(m, "includeTransactions"))
                        w.uint32(8000).bool(m.includeTransactions);
                    return w;
                };

                BlockRangeRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BlockRangeRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.fromHeight = r.uint32();
                            break;
                        case 2:
                            m.toHeight = r.uint32();
                            break;
                        case 3:
                            m.generatorPublicKey = r.bytes();
                            break;
                        case 4:
                            m.generatorAddress = r.bytes();
                            break;
                        case 1000:
                            m.includeTransactions = r.bool();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BlockRangeRequest;
            })();

            grpc.BlockWithHeight = (function() {

                function BlockWithHeight(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                BlockWithHeight.prototype.block = null;
                BlockWithHeight.prototype.height = 0;

                BlockWithHeight.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.block != null && Object.hasOwnProperty.call(m, "block"))
                        $root.vrp.Block.encode(m.block, w.uint32(10).fork()).ldelim();
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(16).uint32(m.height);
                    return w;
                };

                BlockWithHeight.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.BlockWithHeight();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.block = $root.vrp.Block.decode(r, r.uint32());
                            break;
                        case 2:
                            m.height = r.uint32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return BlockWithHeight;
            })();

            grpc.TransactionsApi = (function() {

                function TransactionsApi(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (TransactionsApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TransactionsApi;


                Object.defineProperty(TransactionsApi.prototype.getTransactions = function getTransactions(request, callback) {
                    return this.rpcCall(getTransactions, $root.vrp.node.grpc.TransactionsRequest, $root.vrp.node.grpc.TransactionResponse, request, callback);
                }, "name", { value: "GetTransactions" });


                Object.defineProperty(TransactionsApi.prototype.getStateChanges = function getStateChanges(request, callback) {
                    return this.rpcCall(getStateChanges, $root.vrp.node.grpc.TransactionsRequest, $root.vrp.node.grpc.InvokeScriptResultResponse, request, callback);
                }, "name", { value: "GetStateChanges" });


                Object.defineProperty(TransactionsApi.prototype.getStatuses = function getStatuses(request, callback) {
                    return this.rpcCall(getStatuses, $root.vrp.node.grpc.TransactionsByIdRequest, $root.vrp.node.grpc.TransactionStatus, request, callback);
                }, "name", { value: "GetStatuses" });


                Object.defineProperty(TransactionsApi.prototype.getUnconfirmed = function getUnconfirmed(request, callback) {
                    return this.rpcCall(getUnconfirmed, $root.vrp.node.grpc.TransactionsRequest, $root.vrp.node.grpc.TransactionResponse, request, callback);
                }, "name", { value: "GetUnconfirmed" });


                Object.defineProperty(TransactionsApi.prototype.sign = function sign(request, callback) {
                    return this.rpcCall(sign, $root.vrp.node.grpc.SignRequest, $root.vrp.SignedTransaction, request, callback);
                }, "name", { value: "Sign" });


                Object.defineProperty(TransactionsApi.prototype.broadcast = function broadcast(request, callback) {
                    return this.rpcCall(broadcast, $root.vrp.SignedTransaction, $root.vrp.SignedTransaction, request, callback);
                }, "name", { value: "Broadcast" });

                return TransactionsApi;
            })();

            grpc.ApplicationStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "SUCCEEDED"] = 1;
                values[valuesById[2] = "SCRIPT_EXECUTION_FAILED"] = 2;
                return values;
            })();

            grpc.TransactionStatus = (function() {

                function TransactionStatus(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                TransactionStatus.prototype.id = $util.newBuffer([]);
                TransactionStatus.prototype.status = 0;
                TransactionStatus.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                TransactionStatus.prototype.applicationStatus = 0;

                TransactionStatus.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(10).bytes(m.id);
                    if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                        w.uint32(16).int32(m.status);
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(24).int64(m.height);
                    if (m.applicationStatus != null && Object.hasOwnProperty.call(m, "applicationStatus"))
                        w.uint32(32).int32(m.applicationStatus);
                    return w;
                };

                TransactionStatus.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.TransactionStatus();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = r.bytes();
                            break;
                        case 2:
                            m.status = r.int32();
                            break;
                        case 3:
                            m.height = r.int64();
                            break;
                        case 4:
                            m.applicationStatus = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                TransactionStatus.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NOT_EXISTS"] = 0;
                    values[valuesById[1] = "UNCONFIRMED"] = 1;
                    values[valuesById[2] = "CONFIRMED"] = 2;
                    return values;
                })();

                return TransactionStatus;
            })();

            grpc.TransactionResponse = (function() {

                function TransactionResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                TransactionResponse.prototype.id = $util.newBuffer([]);
                TransactionResponse.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                TransactionResponse.prototype.transaction = null;
                TransactionResponse.prototype.applicationStatus = 0;
                TransactionResponse.prototype.invokeScriptResult = null;

                TransactionResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(10).bytes(m.id);
                    if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                        w.uint32(16).int64(m.height);
                    if (m.transaction != null && Object.hasOwnProperty.call(m, "transaction"))
                        $root.vrp.SignedTransaction.encode(m.transaction, w.uint32(26).fork()).ldelim();
                    if (m.applicationStatus != null && Object.hasOwnProperty.call(m, "applicationStatus"))
                        w.uint32(32).int32(m.applicationStatus);
                    if (m.invokeScriptResult != null && Object.hasOwnProperty.call(m, "invokeScriptResult"))
                        $root.vrp.InvokeScriptResult.encode(m.invokeScriptResult, w.uint32(42).fork()).ldelim();
                    return w;
                };

                TransactionResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.TransactionResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = r.bytes();
                            break;
                        case 2:
                            m.height = r.int64();
                            break;
                        case 3:
                            m.transaction = $root.vrp.SignedTransaction.decode(r, r.uint32());
                            break;
                        case 4:
                            m.applicationStatus = r.int32();
                            break;
                        case 5:
                            m.invokeScriptResult = $root.vrp.InvokeScriptResult.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return TransactionResponse;
            })();

            grpc.TransactionsRequest = (function() {

                function TransactionsRequest(p) {
                    this.transactionIds = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                TransactionsRequest.prototype.sender = $util.newBuffer([]);
                TransactionsRequest.prototype.recipient = null;
                TransactionsRequest.prototype.transactionIds = $util.emptyArray;

                TransactionsRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
                        w.uint32(10).bytes(m.sender);
                    if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                        $root.vrp.Recipient.encode(m.recipient, w.uint32(18).fork()).ldelim();
                    if (m.transactionIds != null && m.transactionIds.length) {
                        for (var i = 0; i < m.transactionIds.length; ++i)
                            w.uint32(26).bytes(m.transactionIds[i]);
                    }
                    return w;
                };

                TransactionsRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.TransactionsRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.sender = r.bytes();
                            break;
                        case 2:
                            m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                            break;
                        case 3:
                            if (!(m.transactionIds && m.transactionIds.length))
                                m.transactionIds = [];
                            m.transactionIds.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return TransactionsRequest;
            })();

            grpc.TransactionsByIdRequest = (function() {

                function TransactionsByIdRequest(p) {
                    this.transactionIds = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                TransactionsByIdRequest.prototype.transactionIds = $util.emptyArray;

                TransactionsByIdRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.transactionIds != null && m.transactionIds.length) {
                        for (var i = 0; i < m.transactionIds.length; ++i)
                            w.uint32(26).bytes(m.transactionIds[i]);
                    }
                    return w;
                };

                TransactionsByIdRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.TransactionsByIdRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 3:
                            if (!(m.transactionIds && m.transactionIds.length))
                                m.transactionIds = [];
                            m.transactionIds.push(r.bytes());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return TransactionsByIdRequest;
            })();

            grpc.CalculateFeeResponse = (function() {

                function CalculateFeeResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                CalculateFeeResponse.prototype.assetId = $util.newBuffer([]);
                CalculateFeeResponse.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                CalculateFeeResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                        w.uint32(10).bytes(m.assetId);
                    if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                        w.uint32(16).uint64(m.amount);
                    return w;
                };

                CalculateFeeResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.CalculateFeeResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.assetId = r.bytes();
                            break;
                        case 2:
                            m.amount = r.uint64();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return CalculateFeeResponse;
            })();

            grpc.SignRequest = (function() {

                function SignRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                SignRequest.prototype.transaction = null;
                SignRequest.prototype.signerPublicKey = $util.newBuffer([]);

                SignRequest.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.transaction != null && Object.hasOwnProperty.call(m, "transaction"))
                        $root.vrp.Transaction.encode(m.transaction, w.uint32(10).fork()).ldelim();
                    if (m.signerPublicKey != null && Object.hasOwnProperty.call(m, "signerPublicKey"))
                        w.uint32(18).bytes(m.signerPublicKey);
                    return w;
                };

                SignRequest.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.SignRequest();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.transaction = $root.vrp.Transaction.decode(r, r.uint32());
                            break;
                        case 2:
                            m.signerPublicKey = r.bytes();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return SignRequest;
            })();

            grpc.InvokeScriptResultResponse = (function() {

                function InvokeScriptResultResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                InvokeScriptResultResponse.prototype.transaction = null;
                InvokeScriptResultResponse.prototype.result = null;

                InvokeScriptResultResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.transaction != null && Object.hasOwnProperty.call(m, "transaction"))
                        $root.vrp.SignedTransaction.encode(m.transaction, w.uint32(10).fork()).ldelim();
                    if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                        $root.vrp.InvokeScriptResult.encode(m.result, w.uint32(18).fork()).ldelim();
                    return w;
                };

                InvokeScriptResultResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.node.grpc.InvokeScriptResultResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.transaction = $root.vrp.SignedTransaction.decode(r, r.uint32());
                            break;
                        case 2:
                            m.result = $root.vrp.InvokeScriptResult.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                return InvokeScriptResultResponse;
            })();

            return grpc;
        })();

        return node;
    })();

    vrp.AssetPair = (function() {

        function AssetPair(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AssetPair.prototype.amountAssetId = $util.newBuffer([]);
        AssetPair.prototype.priceAssetId = $util.newBuffer([]);

        AssetPair.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.amountAssetId != null && Object.hasOwnProperty.call(m, "amountAssetId"))
                w.uint32(10).bytes(m.amountAssetId);
            if (m.priceAssetId != null && Object.hasOwnProperty.call(m, "priceAssetId"))
                w.uint32(18).bytes(m.priceAssetId);
            return w;
        };

        AssetPair.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.AssetPair();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.amountAssetId = r.bytes();
                    break;
                case 2:
                    m.priceAssetId = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AssetPair;
    })();

    vrp.Order = (function() {

        function Order(p) {
            this.proofs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Order.prototype.chainId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.matcherPublicKey = $util.newBuffer([]);
        Order.prototype.assetPair = null;
        Order.prototype.orderSide = 0;
        Order.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.price = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.expiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.matcherFee = null;
        Order.prototype.version = 0;
        Order.prototype.proofs = $util.emptyArray;
        Order.prototype.priceMode = 0;
        Order.prototype.senderPublicKey = null;
        Order.prototype.eip712Signature = null;

        var $oneOfFields;

        Object.defineProperty(Order.prototype, "sender", {
            get: $util.oneOfGetter($oneOfFields = ["senderPublicKey", "eip712Signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Order.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId"))
                w.uint32(8).int64(m.chainId);
            if (m.senderPublicKey != null && Object.hasOwnProperty.call(m, "senderPublicKey"))
                w.uint32(18).bytes(m.senderPublicKey);
            if (m.matcherPublicKey != null && Object.hasOwnProperty.call(m, "matcherPublicKey"))
                w.uint32(26).bytes(m.matcherPublicKey);
            if (m.assetPair != null && Object.hasOwnProperty.call(m, "assetPair"))
                $root.vrp.AssetPair.encode(m.assetPair, w.uint32(34).fork()).ldelim();
            if (m.orderSide != null && Object.hasOwnProperty.call(m, "orderSide"))
                w.uint32(40).int32(m.orderSide);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(48).int64(m.amount);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(56).int64(m.price);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(64).int64(m.timestamp);
            if (m.expiration != null && Object.hasOwnProperty.call(m, "expiration"))
                w.uint32(72).int64(m.expiration);
            if (m.matcherFee != null && Object.hasOwnProperty.call(m, "matcherFee"))
                $root.vrp.Amount.encode(m.matcherFee, w.uint32(82).fork()).ldelim();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(88).int32(m.version);
            if (m.proofs != null && m.proofs.length) {
                for (var i = 0; i < m.proofs.length; ++i)
                    w.uint32(98).bytes(m.proofs[i]);
            }
            if (m.eip712Signature != null && Object.hasOwnProperty.call(m, "eip712Signature"))
                w.uint32(106).bytes(m.eip712Signature);
            if (m.priceMode != null && Object.hasOwnProperty.call(m, "priceMode"))
                w.uint32(112).int32(m.priceMode);
            return w;
        };

        Order.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Order();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.chainId = r.int64();
                    break;
                case 3:
                    m.matcherPublicKey = r.bytes();
                    break;
                case 4:
                    m.assetPair = $root.vrp.AssetPair.decode(r, r.uint32());
                    break;
                case 5:
                    m.orderSide = r.int32();
                    break;
                case 6:
                    m.amount = r.int64();
                    break;
                case 7:
                    m.price = r.int64();
                    break;
                case 8:
                    m.timestamp = r.int64();
                    break;
                case 9:
                    m.expiration = r.int64();
                    break;
                case 10:
                    m.matcherFee = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                case 11:
                    m.version = r.int32();
                    break;
                case 12:
                    if (!(m.proofs && m.proofs.length))
                        m.proofs = [];
                    m.proofs.push(r.bytes());
                    break;
                case 14:
                    m.priceMode = r.int32();
                    break;
                case 2:
                    m.senderPublicKey = r.bytes();
                    break;
                case 13:
                    m.eip712Signature = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Order.Side = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BUY"] = 0;
            values[valuesById[1] = "SELL"] = 1;
            return values;
        })();

        Order.PriceMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "FIXED_DECIMALS"] = 1;
            values[valuesById[2] = "ASSET_DECIMALS"] = 2;
            return values;
        })();

        return Order;
    })();

    vrp.Recipient = (function() {

        function Recipient(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Recipient.prototype.publicKeyHash = null;
        Recipient.prototype.alias = null;

        var $oneOfFields;

        Object.defineProperty(Recipient.prototype, "recipient", {
            get: $util.oneOfGetter($oneOfFields = ["publicKeyHash", "alias"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Recipient.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.publicKeyHash != null && Object.hasOwnProperty.call(m, "publicKeyHash"))
                w.uint32(10).bytes(m.publicKeyHash);
            if (m.alias != null && Object.hasOwnProperty.call(m, "alias"))
                w.uint32(18).string(m.alias);
            return w;
        };

        Recipient.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Recipient();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.publicKeyHash = r.bytes();
                    break;
                case 2:
                    m.alias = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Recipient;
    })();

    vrp.SignedTransaction = (function() {

        function SignedTransaction(p) {
            this.proofs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SignedTransaction.prototype.vrpTransaction = null;
        SignedTransaction.prototype.ethereumTransaction = null;
        SignedTransaction.prototype.proofs = $util.emptyArray;

        var $oneOfFields;

        Object.defineProperty(SignedTransaction.prototype, "transaction", {
            get: $util.oneOfGetter($oneOfFields = ["vrpTransaction", "ethereumTransaction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SignedTransaction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.vrpTransaction != null && Object.hasOwnProperty.call(m, "vrpTransaction"))
                $root.vrp.Transaction.encode(m.vrpTransaction, w.uint32(10).fork()).ldelim();
            if (m.proofs != null && m.proofs.length) {
                for (var i = 0; i < m.proofs.length; ++i)
                    w.uint32(18).bytes(m.proofs[i]);
            }
            if (m.ethereumTransaction != null && Object.hasOwnProperty.call(m, "ethereumTransaction"))
                w.uint32(26).bytes(m.ethereumTransaction);
            return w;
        };

        SignedTransaction.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.SignedTransaction();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.vrpTransaction = $root.vrp.Transaction.decode(r, r.uint32());
                    break;
                case 3:
                    m.ethereumTransaction = r.bytes();
                    break;
                case 2:
                    if (!(m.proofs && m.proofs.length))
                        m.proofs = [];
                    m.proofs.push(r.bytes());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SignedTransaction;
    })();

    vrp.Transaction = (function() {

        function Transaction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Transaction.prototype.chainId = 0;
        Transaction.prototype.senderPublicKey = $util.newBuffer([]);
        Transaction.prototype.fee = null;
        Transaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Transaction.prototype.version = 0;
        Transaction.prototype.genesis = null;
        Transaction.prototype.payment = null;
        Transaction.prototype.issue = null;
        Transaction.prototype.transfer = null;
        Transaction.prototype.reissue = null;
        Transaction.prototype.burn = null;
        Transaction.prototype.exchange = null;
        Transaction.prototype.lease = null;
        Transaction.prototype.leaseCancel = null;
        Transaction.prototype.createAlias = null;
        Transaction.prototype.massTransfer = null;
        Transaction.prototype.dataTransaction = null;
        Transaction.prototype.setScript = null;
        Transaction.prototype.sponsorFee = null;
        Transaction.prototype.setAssetScript = null;
        Transaction.prototype.invokeScript = null;
        Transaction.prototype.updateAssetInfo = null;
        Transaction.prototype.anonymousTx = null;

        var $oneOfFields;

        Object.defineProperty(Transaction.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["genesis", "payment", "issue", "transfer", "reissue", "burn", "exchange", "lease", "leaseCancel", "createAlias", "massTransfer", "dataTransaction", "setScript", "sponsorFee", "setAssetScript", "invokeScript", "updateAssetInfo", "anonymousTx"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Transaction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chainId != null && Object.hasOwnProperty.call(m, "chainId"))
                w.uint32(8).int32(m.chainId);
            if (m.senderPublicKey != null && Object.hasOwnProperty.call(m, "senderPublicKey"))
                w.uint32(18).bytes(m.senderPublicKey);
            if (m.fee != null && Object.hasOwnProperty.call(m, "fee"))
                $root.vrp.Amount.encode(m.fee, w.uint32(26).fork()).ldelim();
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(32).int64(m.timestamp);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(40).int32(m.version);
            if (m.genesis != null && Object.hasOwnProperty.call(m, "genesis"))
                $root.vrp.GenesisTransactionData.encode(m.genesis, w.uint32(810).fork()).ldelim();
            if (m.payment != null && Object.hasOwnProperty.call(m, "payment"))
                $root.vrp.PaymentTransactionData.encode(m.payment, w.uint32(818).fork()).ldelim();
            if (m.issue != null && Object.hasOwnProperty.call(m, "issue"))
                $root.vrp.IssueTransactionData.encode(m.issue, w.uint32(826).fork()).ldelim();
            if (m.transfer != null && Object.hasOwnProperty.call(m, "transfer"))
                $root.vrp.TransferTransactionData.encode(m.transfer, w.uint32(834).fork()).ldelim();
            if (m.reissue != null && Object.hasOwnProperty.call(m, "reissue"))
                $root.vrp.ReissueTransactionData.encode(m.reissue, w.uint32(842).fork()).ldelim();
            if (m.burn != null && Object.hasOwnProperty.call(m, "burn"))
                $root.vrp.BurnTransactionData.encode(m.burn, w.uint32(850).fork()).ldelim();
            if (m.exchange != null && Object.hasOwnProperty.call(m, "exchange"))
                $root.vrp.ExchangeTransactionData.encode(m.exchange, w.uint32(858).fork()).ldelim();
            if (m.lease != null && Object.hasOwnProperty.call(m, "lease"))
                $root.vrp.LeaseTransactionData.encode(m.lease, w.uint32(866).fork()).ldelim();
            if (m.leaseCancel != null && Object.hasOwnProperty.call(m, "leaseCancel"))
                $root.vrp.LeaseCancelTransactionData.encode(m.leaseCancel, w.uint32(874).fork()).ldelim();
            if (m.createAlias != null && Object.hasOwnProperty.call(m, "createAlias"))
                $root.vrp.CreateAliasTransactionData.encode(m.createAlias, w.uint32(882).fork()).ldelim();
            if (m.massTransfer != null && Object.hasOwnProperty.call(m, "massTransfer"))
                $root.vrp.MassTransferTransactionData.encode(m.massTransfer, w.uint32(890).fork()).ldelim();
            if (m.dataTransaction != null && Object.hasOwnProperty.call(m, "dataTransaction"))
                $root.vrp.DataTransactionData.encode(m.dataTransaction, w.uint32(898).fork()).ldelim();
            if (m.setScript != null && Object.hasOwnProperty.call(m, "setScript"))
                $root.vrp.SetScriptTransactionData.encode(m.setScript, w.uint32(906).fork()).ldelim();
            if (m.sponsorFee != null && Object.hasOwnProperty.call(m, "sponsorFee"))
                $root.vrp.SponsorFeeTransactionData.encode(m.sponsorFee, w.uint32(914).fork()).ldelim();
            if (m.setAssetScript != null && Object.hasOwnProperty.call(m, "setAssetScript"))
                $root.vrp.SetAssetScriptTransactionData.encode(m.setAssetScript, w.uint32(922).fork()).ldelim();
            if (m.invokeScript != null && Object.hasOwnProperty.call(m, "invokeScript"))
                $root.vrp.InvokeScriptTransactionData.encode(m.invokeScript, w.uint32(930).fork()).ldelim();
            if (m.updateAssetInfo != null && Object.hasOwnProperty.call(m, "updateAssetInfo"))
                $root.vrp.UpdateAssetInfoTransactionData.encode(m.updateAssetInfo, w.uint32(938).fork()).ldelim();
            if (m.anonymousTx != null && Object.hasOwnProperty.call(m, "anonymousTx"))
                $root.vrp.PrivatePaymentTransactionData.encode(m.anonymousTx, w.uint32(946).fork()).ldelim();
            return w;
        };

        Transaction.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.Transaction();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.chainId = r.int32();
                    break;
                case 2:
                    m.senderPublicKey = r.bytes();
                    break;
                case 3:
                    m.fee = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                case 4:
                    m.timestamp = r.int64();
                    break;
                case 5:
                    m.version = r.int32();
                    break;
                case 101:
                    m.genesis = $root.vrp.GenesisTransactionData.decode(r, r.uint32());
                    break;
                case 102:
                    m.payment = $root.vrp.PaymentTransactionData.decode(r, r.uint32());
                    break;
                case 103:
                    m.issue = $root.vrp.IssueTransactionData.decode(r, r.uint32());
                    break;
                case 104:
                    m.transfer = $root.vrp.TransferTransactionData.decode(r, r.uint32());
                    break;
                case 105:
                    m.reissue = $root.vrp.ReissueTransactionData.decode(r, r.uint32());
                    break;
                case 106:
                    m.burn = $root.vrp.BurnTransactionData.decode(r, r.uint32());
                    break;
                case 107:
                    m.exchange = $root.vrp.ExchangeTransactionData.decode(r, r.uint32());
                    break;
                case 108:
                    m.lease = $root.vrp.LeaseTransactionData.decode(r, r.uint32());
                    break;
                case 109:
                    m.leaseCancel = $root.vrp.LeaseCancelTransactionData.decode(r, r.uint32());
                    break;
                case 110:
                    m.createAlias = $root.vrp.CreateAliasTransactionData.decode(r, r.uint32());
                    break;
                case 111:
                    m.massTransfer = $root.vrp.MassTransferTransactionData.decode(r, r.uint32());
                    break;
                case 112:
                    m.dataTransaction = $root.vrp.DataTransactionData.decode(r, r.uint32());
                    break;
                case 113:
                    m.setScript = $root.vrp.SetScriptTransactionData.decode(r, r.uint32());
                    break;
                case 114:
                    m.sponsorFee = $root.vrp.SponsorFeeTransactionData.decode(r, r.uint32());
                    break;
                case 115:
                    m.setAssetScript = $root.vrp.SetAssetScriptTransactionData.decode(r, r.uint32());
                    break;
                case 116:
                    m.invokeScript = $root.vrp.InvokeScriptTransactionData.decode(r, r.uint32());
                    break;
                case 117:
                    m.updateAssetInfo = $root.vrp.UpdateAssetInfoTransactionData.decode(r, r.uint32());
                    break;
                case 118:
                    m.anonymousTx = $root.vrp.PrivatePaymentTransactionData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Transaction;
    })();

    vrp.GenesisTransactionData = (function() {

        function GenesisTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GenesisTransactionData.prototype.recipientAddress = $util.newBuffer([]);
        GenesisTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GenesisTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                w.uint32(10).bytes(m.recipientAddress);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        GenesisTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.GenesisTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.recipientAddress = r.bytes();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GenesisTransactionData;
    })();

    vrp.PaymentTransactionData = (function() {

        function PaymentTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PaymentTransactionData.prototype.recipientAddress = $util.newBuffer([]);
        PaymentTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PaymentTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                w.uint32(10).bytes(m.recipientAddress);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        PaymentTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.PaymentTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.recipientAddress = r.bytes();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PaymentTransactionData;
    })();

    vrp.TransferTransactionData = (function() {

        function TransferTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TransferTransactionData.prototype.recipient = null;
        TransferTransactionData.prototype.amount = null;
        TransferTransactionData.prototype.attachment = $util.newBuffer([]);

        TransferTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                $root.vrp.Recipient.encode(m.recipient, w.uint32(10).fork()).ldelim();
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                $root.vrp.Amount.encode(m.amount, w.uint32(18).fork()).ldelim();
            if (m.attachment != null && Object.hasOwnProperty.call(m, "attachment"))
                w.uint32(26).bytes(m.attachment);
            return w;
        };

        TransferTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.TransferTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                    break;
                case 2:
                    m.amount = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                case 3:
                    m.attachment = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TransferTransactionData;
    })();

    vrp.CreateAliasTransactionData = (function() {

        function CreateAliasTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CreateAliasTransactionData.prototype.alias = "";

        CreateAliasTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.alias != null && Object.hasOwnProperty.call(m, "alias"))
                w.uint32(10).string(m.alias);
            return w;
        };

        CreateAliasTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.CreateAliasTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.alias = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CreateAliasTransactionData;
    })();

    vrp.DataTransactionData = (function() {

        function DataTransactionData(p) {
            this.data = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DataTransactionData.prototype.data = $util.emptyArray;

        DataTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.data != null && m.data.length) {
                for (var i = 0; i < m.data.length; ++i)
                    $root.vrp.DataTransactionData.DataEntry.encode(m.data[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DataTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.DataTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.data && m.data.length))
                        m.data = [];
                    m.data.push($root.vrp.DataTransactionData.DataEntry.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        DataTransactionData.DataEntry = (function() {

            function DataEntry(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            DataEntry.prototype.key = "";
            DataEntry.prototype.intValue = null;
            DataEntry.prototype.boolValue = null;
            DataEntry.prototype.binaryValue = null;
            DataEntry.prototype.stringValue = null;

            var $oneOfFields;

            Object.defineProperty(DataEntry.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["intValue", "boolValue", "binaryValue", "stringValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            DataEntry.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                if (m.intValue != null && Object.hasOwnProperty.call(m, "intValue"))
                    w.uint32(80).int64(m.intValue);
                if (m.boolValue != null && Object.hasOwnProperty.call(m, "boolValue"))
                    w.uint32(88).bool(m.boolValue);
                if (m.binaryValue != null && Object.hasOwnProperty.call(m, "binaryValue"))
                    w.uint32(98).bytes(m.binaryValue);
                if (m.stringValue != null && Object.hasOwnProperty.call(m, "stringValue"))
                    w.uint32(106).string(m.stringValue);
                return w;
            };

            DataEntry.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.DataTransactionData.DataEntry();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.key = r.string();
                        break;
                    case 10:
                        m.intValue = r.int64();
                        break;
                    case 11:
                        m.boolValue = r.bool();
                        break;
                    case 12:
                        m.binaryValue = r.bytes();
                        break;
                    case 13:
                        m.stringValue = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return DataEntry;
        })();

        return DataTransactionData;
    })();

    vrp.MassTransferTransactionData = (function() {

        function MassTransferTransactionData(p) {
            this.transfers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MassTransferTransactionData.prototype.assetId = $util.newBuffer([]);
        MassTransferTransactionData.prototype.transfers = $util.emptyArray;
        MassTransferTransactionData.prototype.attachment = $util.newBuffer([]);

        MassTransferTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                w.uint32(10).bytes(m.assetId);
            if (m.transfers != null && m.transfers.length) {
                for (var i = 0; i < m.transfers.length; ++i)
                    $root.vrp.MassTransferTransactionData.Transfer.encode(m.transfers[i], w.uint32(18).fork()).ldelim();
            }
            if (m.attachment != null && Object.hasOwnProperty.call(m, "attachment"))
                w.uint32(26).bytes(m.attachment);
            return w;
        };

        MassTransferTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.MassTransferTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetId = r.bytes();
                    break;
                case 2:
                    if (!(m.transfers && m.transfers.length))
                        m.transfers = [];
                    m.transfers.push($root.vrp.MassTransferTransactionData.Transfer.decode(r, r.uint32()));
                    break;
                case 3:
                    m.attachment = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        MassTransferTransactionData.Transfer = (function() {

            function Transfer(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Transfer.prototype.recipient = null;
            Transfer.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            Transfer.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                    $root.vrp.Recipient.encode(m.recipient, w.uint32(10).fork()).ldelim();
                if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                    w.uint32(16).int64(m.amount);
                return w;
            };

            Transfer.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.MassTransferTransactionData.Transfer();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                        break;
                    case 2:
                        m.amount = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Transfer;
        })();

        return MassTransferTransactionData;
    })();

    vrp.LeaseTransactionData = (function() {

        function LeaseTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LeaseTransactionData.prototype.recipient = null;
        LeaseTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LeaseTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipient != null && Object.hasOwnProperty.call(m, "recipient"))
                $root.vrp.Recipient.encode(m.recipient, w.uint32(10).fork()).ldelim();
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        LeaseTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.LeaseTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.recipient = $root.vrp.Recipient.decode(r, r.uint32());
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LeaseTransactionData;
    })();

    vrp.LeaseCancelTransactionData = (function() {

        function LeaseCancelTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LeaseCancelTransactionData.prototype.leaseId = $util.newBuffer([]);

        LeaseCancelTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.leaseId != null && Object.hasOwnProperty.call(m, "leaseId"))
                w.uint32(10).bytes(m.leaseId);
            return w;
        };

        LeaseCancelTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.LeaseCancelTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.leaseId = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LeaseCancelTransactionData;
    })();

    vrp.BurnTransactionData = (function() {

        function BurnTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BurnTransactionData.prototype.assetAmount = null;

        BurnTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetAmount != null && Object.hasOwnProperty.call(m, "assetAmount"))
                $root.vrp.Amount.encode(m.assetAmount, w.uint32(10).fork()).ldelim();
            return w;
        };

        BurnTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.BurnTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetAmount = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BurnTransactionData;
    })();

    vrp.IssueTransactionData = (function() {

        function IssueTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IssueTransactionData.prototype.name = "";
        IssueTransactionData.prototype.description = "";
        IssueTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IssueTransactionData.prototype.decimals = 0;
        IssueTransactionData.prototype.reissuable = false;
        IssueTransactionData.prototype.script = $util.newBuffer([]);

        IssueTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                w.uint32(18).string(m.description);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(24).int64(m.amount);
            if (m.decimals != null && Object.hasOwnProperty.call(m, "decimals"))
                w.uint32(32).int32(m.decimals);
            if (m.reissuable != null && Object.hasOwnProperty.call(m, "reissuable"))
                w.uint32(40).bool(m.reissuable);
            if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                w.uint32(50).bytes(m.script);
            return w;
        };

        IssueTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.IssueTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.name = r.string();
                    break;
                case 2:
                    m.description = r.string();
                    break;
                case 3:
                    m.amount = r.int64();
                    break;
                case 4:
                    m.decimals = r.int32();
                    break;
                case 5:
                    m.reissuable = r.bool();
                    break;
                case 6:
                    m.script = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return IssueTransactionData;
    })();

    vrp.ReissueTransactionData = (function() {

        function ReissueTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ReissueTransactionData.prototype.assetAmount = null;
        ReissueTransactionData.prototype.reissuable = false;

        ReissueTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetAmount != null && Object.hasOwnProperty.call(m, "assetAmount"))
                $root.vrp.Amount.encode(m.assetAmount, w.uint32(10).fork()).ldelim();
            if (m.reissuable != null && Object.hasOwnProperty.call(m, "reissuable"))
                w.uint32(16).bool(m.reissuable);
            return w;
        };

        ReissueTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.ReissueTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetAmount = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                case 2:
                    m.reissuable = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReissueTransactionData;
    })();

    vrp.SetAssetScriptTransactionData = (function() {

        function SetAssetScriptTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetAssetScriptTransactionData.prototype.assetId = $util.newBuffer([]);
        SetAssetScriptTransactionData.prototype.script = $util.newBuffer([]);

        SetAssetScriptTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                w.uint32(10).bytes(m.assetId);
            if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                w.uint32(18).bytes(m.script);
            return w;
        };

        SetAssetScriptTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.SetAssetScriptTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetId = r.bytes();
                    break;
                case 2:
                    m.script = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetAssetScriptTransactionData;
    })();

    vrp.SetScriptTransactionData = (function() {

        function SetScriptTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetScriptTransactionData.prototype.script = $util.newBuffer([]);

        SetScriptTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.script != null && Object.hasOwnProperty.call(m, "script"))
                w.uint32(10).bytes(m.script);
            return w;
        };

        SetScriptTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.SetScriptTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.script = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetScriptTransactionData;
    })();

    vrp.ExchangeTransactionData = (function() {

        function ExchangeTransactionData(p) {
            this.orders = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ExchangeTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ExchangeTransactionData.prototype.price = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ExchangeTransactionData.prototype.buyMatcherFee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ExchangeTransactionData.prototype.sellMatcherFee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ExchangeTransactionData.prototype.orders = $util.emptyArray;

        ExchangeTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(8).int64(m.amount);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(16).int64(m.price);
            if (m.buyMatcherFee != null && Object.hasOwnProperty.call(m, "buyMatcherFee"))
                w.uint32(24).int64(m.buyMatcherFee);
            if (m.sellMatcherFee != null && Object.hasOwnProperty.call(m, "sellMatcherFee"))
                w.uint32(32).int64(m.sellMatcherFee);
            if (m.orders != null && m.orders.length) {
                for (var i = 0; i < m.orders.length; ++i)
                    $root.vrp.Order.encode(m.orders[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        ExchangeTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.ExchangeTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.amount = r.int64();
                    break;
                case 2:
                    m.price = r.int64();
                    break;
                case 3:
                    m.buyMatcherFee = r.int64();
                    break;
                case 4:
                    m.sellMatcherFee = r.int64();
                    break;
                case 5:
                    if (!(m.orders && m.orders.length))
                        m.orders = [];
                    m.orders.push($root.vrp.Order.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ExchangeTransactionData;
    })();

    vrp.SponsorFeeTransactionData = (function() {

        function SponsorFeeTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SponsorFeeTransactionData.prototype.minFee = null;

        SponsorFeeTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.minFee != null && Object.hasOwnProperty.call(m, "minFee"))
                $root.vrp.Amount.encode(m.minFee, w.uint32(10).fork()).ldelim();
            return w;
        };

        SponsorFeeTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.SponsorFeeTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.minFee = $root.vrp.Amount.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SponsorFeeTransactionData;
    })();

    vrp.InvokeScriptTransactionData = (function() {

        function InvokeScriptTransactionData(p) {
            this.payments = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        InvokeScriptTransactionData.prototype.dApp = null;
        InvokeScriptTransactionData.prototype.functionCall = $util.newBuffer([]);
        InvokeScriptTransactionData.prototype.payments = $util.emptyArray;

        InvokeScriptTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dApp != null && Object.hasOwnProperty.call(m, "dApp"))
                $root.vrp.Recipient.encode(m.dApp, w.uint32(10).fork()).ldelim();
            if (m.functionCall != null && Object.hasOwnProperty.call(m, "functionCall"))
                w.uint32(18).bytes(m.functionCall);
            if (m.payments != null && m.payments.length) {
                for (var i = 0; i < m.payments.length; ++i)
                    $root.vrp.Amount.encode(m.payments[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        InvokeScriptTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeScriptTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.dApp = $root.vrp.Recipient.decode(r, r.uint32());
                    break;
                case 2:
                    m.functionCall = r.bytes();
                    break;
                case 3:
                    if (!(m.payments && m.payments.length))
                        m.payments = [];
                    m.payments.push($root.vrp.Amount.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return InvokeScriptTransactionData;
    })();

    vrp.UpdateAssetInfoTransactionData = (function() {

        function UpdateAssetInfoTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpdateAssetInfoTransactionData.prototype.assetId = $util.newBuffer([]);
        UpdateAssetInfoTransactionData.prototype.name = "";
        UpdateAssetInfoTransactionData.prototype.description = "";
        UpdateAssetInfoTransactionData.prototype.image = "";

        UpdateAssetInfoTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.assetId != null && Object.hasOwnProperty.call(m, "assetId"))
                w.uint32(10).bytes(m.assetId);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                w.uint32(26).string(m.description);
            if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                w.uint32(34).string(m.image);
            return w;
        };

        UpdateAssetInfoTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.UpdateAssetInfoTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.assetId = r.bytes();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.description = r.string();
                    break;
                case 4:
                    m.image = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpdateAssetInfoTransactionData;
    })();

    vrp.InvokeExpressionTransactionData = (function() {

        function InvokeExpressionTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        InvokeExpressionTransactionData.prototype.expression = $util.newBuffer([]);

        InvokeExpressionTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.expression != null && Object.hasOwnProperty.call(m, "expression"))
                w.uint32(10).bytes(m.expression);
            return w;
        };

        InvokeExpressionTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.InvokeExpressionTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.expression = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return InvokeExpressionTransactionData;
    })();

    vrp.PrivatePaymentTransactionData = (function() {

        function PrivatePaymentTransactionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PrivatePaymentTransactionData.prototype.recipientAddress = $util.newBuffer([]);
        PrivatePaymentTransactionData.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PrivatePaymentTransactionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipientAddress != null && Object.hasOwnProperty.call(m, "recipientAddress"))
                w.uint32(10).bytes(m.recipientAddress);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        PrivatePaymentTransactionData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vrp.PrivatePaymentTransactionData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.recipientAddress = r.bytes();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PrivatePaymentTransactionData;
    })();

    return vrp;
})();

$root.google = (function() {

    var google = {};

    google.protobuf = (function() {

        var protobuf = {};

        protobuf.DoubleValue = (function() {

            function DoubleValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            DoubleValue.prototype.value = 0;

            DoubleValue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(9).double(m.value);
                return w;
            };

            DoubleValue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.DoubleValue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.double();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            function FloatValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            FloatValue.prototype.value = 0;

            FloatValue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(13).float(m.value);
                return w;
            };

            FloatValue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FloatValue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.float();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            function Int64Value(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            Int64Value.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(8).int64(m.value);
                return w;
            };

            Int64Value.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Int64Value();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            function UInt64Value(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            UInt64Value.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(8).uint64(m.value);
                return w;
            };

            UInt64Value.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.UInt64Value();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.uint64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            function Int32Value(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Int32Value.prototype.value = 0;

            Int32Value.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(8).int32(m.value);
                return w;
            };

            Int32Value.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Int32Value();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            function UInt32Value(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            UInt32Value.prototype.value = 0;

            UInt32Value.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(8).uint32(m.value);
                return w;
            };

            UInt32Value.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.UInt32Value();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.uint32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            function BoolValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            BoolValue.prototype.value = false;

            BoolValue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(8).bool(m.value);
                return w;
            };

            BoolValue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.BoolValue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            function StringValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            StringValue.prototype.value = "";

            StringValue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(10).string(m.value);
                return w;
            };

            StringValue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.StringValue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            function BytesValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            BytesValue.prototype.value = $util.newBuffer([]);

            BytesValue.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(10).bytes(m.value);
                return w;
            };

            BytesValue.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.BytesValue();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.value = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return BytesValue;
        })();

        protobuf.Empty = (function() {

            function Empty(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Empty.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                return w;
            };

            Empty.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Empty();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
