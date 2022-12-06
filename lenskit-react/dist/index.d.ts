import * as Apollo from '@apollo/client';

declare function LensKitButton(): JSX.Element;

interface LensKitProviderProps {
    children: React.ReactNode;
}
declare function LensKitProvider({ children }: LensKitProviderProps): JSX.Element;

declare const useAuth: () => {
    auth: (address: string) => Promise<string | null>;
    token: string;
    error: Error | null;
};

declare function useCollect(): {
    collect: (publicationId: string) => Promise<void>;
    tx: any;
    loading: boolean;
    error: Error | null;
};

interface SignatureContext {
    signature?: string;
}
interface GenericMetadata {
    /**
     * The metadata version.
     */
    version: string;
    /**
     * The metadata id can be anything but if your uploading to ipfs
     * you will want it to be random.. using uuid could be an option!
     */
    metadata_id: string;
    /**
     *  Signed metadata to validate the owner
     */
    signatureContext?: SignatureContext;
    /**
     * This is the appId the content belongs to
     */
    appId?: string;
}
declare enum MetadataDisplayType {
    number = "number",
    string = "string",
    date = "date"
}

/** The collect module types */
declare enum CollectModules {
    FeeCollectModule = "FeeCollectModule",
    FreeCollectModule = "FreeCollectModule",
    LimitedFeeCollectModule = "LimitedFeeCollectModule",
    LimitedTimedFeeCollectModule = "LimitedTimedFeeCollectModule",
    RevertCollectModule = "RevertCollectModule",
    TimedFeeCollectModule = "TimedFeeCollectModule",
    UnknownCollectModule = "UnknownCollectModule"
}
/** The follow module types */
declare enum FollowModules {
    FeeFollowModule = "FeeFollowModule",
    ProfileFollowModule = "ProfileFollowModule",
    RevertFollowModule = "RevertFollowModule",
    UnknownFollowModule = "UnknownFollowModule"
}
/** The publication metadata display types */
declare enum PublicationMetadataDisplayTypes {
    Date = "date",
    Number = "number",
    String = "string"
}
/** The publication types */
declare enum PublicationTypes {
    Comment = "COMMENT",
    Mirror = "MIRROR",
    Post = "POST"
}
/** Reaction types */
declare enum ReactionTypes {
    Downvote = "DOWNVOTE",
    Upvote = "UPVOTE"
}
/** The reference module types */
declare enum ReferenceModules {
    DegreesOfSeparationReferenceModule = "DegreesOfSeparationReferenceModule",
    FollowerOnlyReferenceModule = "FollowerOnlyReferenceModule",
    UnknownReferenceModule = "UnknownReferenceModule"
}

interface MetadataMedia {
    item: string;
    /**
     * This is the mime type of media
     */
    type: string;
}
interface MetadataAttribute {
    displayType?: MetadataDisplayType;
    traitType?: string;
    value: string;
}
interface Metadata extends GenericMetadata {
    description?: string;
    content?: string;
    external_url?: string | null;
    name: string;
    attributes: MetadataAttribute[];
    image?: string | null;
    imageMimeType?: string | null;
    media?: MetadataMedia[];
    animation_url?: string;
    locale: string;
    tags?: string[];
    contentWarning?: PublicationContentWarning;
    mainContentFocus: PublicationMainFocus;
}
declare enum PublicationContentWarning {
    NSFW = "NSFW",
    SENSITIVE = "SENSITIVE",
    SPOILER = "SPOILER"
}
declare enum PublicationMainFocus {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
    ARTICLE = "ARTICLE",
    TEXT_ONLY = "TEXT_ONLY",
    AUDIO = "AUDIO",
    LINK = "LINK",
    EMBED = "EMBED"
}

declare function useComment(): {
    comment: (profileId: string, publicationId: string, metadata: Metadata) => Promise<void>;
    publicationId: string | null;
    loading: boolean;
    error: Error | null;
};

declare function useCreateProfile(): {
    createProfile: (handle: string) => Promise<void>;
    profileId: string | null;
    loading: boolean;
    error: Error | null;
};

declare function useFollow(): {
    follow: (profileId: string) => Promise<void>;
    tx: any;
    loading: boolean;
    error: Error | null;
};

declare function useIndexedTx(txHash: string | null): {
    tx: any;
    error: Error | null;
};

declare function useMirror(): {
    mirror: (profileId: string, publicationId: string) => Promise<void>;
    publicationId: string | null;
    loading: boolean;
    error: Error | null;
};

declare function usePost(): {
    post: (profileId: string, metadata: Metadata) => Promise<void>;
    publicationId: string | null;
    loading: boolean;
    error: Error | null;
};

declare function useProfile(profileId: string): {
    profile: {
        __typename?: "Profile" | undefined;
        id: any;
        name?: string | null | undefined;
        bio?: string | null | undefined;
        isFollowedByMe: boolean;
        isFollowing: boolean;
        followNftAddress?: any;
        metadata?: any;
        isDefault: boolean;
        handle: any;
        ownedBy: any;
        attributes?: {
            __typename?: "Attribute" | undefined;
            displayType?: string | null | undefined;
            traitType?: string | null | undefined;
            key: string;
            value: string;
        }[] | null | undefined;
        picture?: {
            __typename?: "MediaSet" | undefined;
            original: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            };
            small?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
            medium?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
        } | {
            __typename?: "NftImage" | undefined;
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
        } | null | undefined;
        coverPicture?: {
            __typename?: "MediaSet" | undefined;
            original: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            };
            small?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
            medium?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
        } | {
            __typename?: "NftImage" | undefined;
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
        } | null | undefined;
        dispatcher?: {
            __typename?: "Dispatcher" | undefined;
            address: any;
            canUseRelay: boolean;
        } | null | undefined;
        stats: {
            __typename?: "ProfileStats" | undefined;
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
        };
        followModule?: {
            __typename?: "FeeFollowModuleSettings" | undefined;
            type: FollowModules;
            recipient: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename?: "ProfileFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
        } | {
            __typename?: "RevertFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
        } | {
            __typename?: "UnknownFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
            followModuleReturnData: any;
        } | null | undefined;
        onChainIdentity: {
            __typename?: "OnChainIdentity" | undefined;
            proofOfHumanity: boolean;
            ens?: {
                __typename?: "EnsOnChainIdentity" | undefined;
                name?: any;
            } | null | undefined;
            sybilDotOrg: {
                __typename?: "SybilDotOrgIdentity" | undefined;
                verified: boolean;
                source: {
                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                    twitter: {
                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                        handle?: string | null | undefined;
                    };
                };
            };
            worldcoin: {
                __typename?: "WorldcoinIdentity" | undefined;
                isHuman: boolean;
            };
        };
    } | null | undefined;
    loading: boolean;
    error: Apollo.ApolloError | undefined;
};

declare function useProfiles(profileIds: string[]): {
    profiles: {
        __typename?: "Profile" | undefined;
        id: any;
        name?: string | null | undefined;
        bio?: string | null | undefined;
        isFollowedByMe: boolean;
        isFollowing: boolean;
        followNftAddress?: any;
        metadata?: any;
        isDefault: boolean;
        handle: any;
        ownedBy: any;
        attributes?: {
            __typename?: "Attribute" | undefined;
            displayType?: string | null | undefined;
            traitType?: string | null | undefined;
            key: string;
            value: string;
        }[] | null | undefined;
        picture?: {
            __typename?: "MediaSet" | undefined;
            original: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            };
            small?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
            medium?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
        } | {
            __typename?: "NftImage" | undefined;
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
        } | null | undefined;
        coverPicture?: {
            __typename?: "MediaSet" | undefined;
            original: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            };
            small?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
            medium?: {
                __typename?: "Media" | undefined;
                url: any;
                width?: number | null | undefined;
                height?: number | null | undefined;
                mimeType?: any;
            } | null | undefined;
        } | {
            __typename?: "NftImage" | undefined;
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
        } | null | undefined;
        dispatcher?: {
            __typename?: "Dispatcher" | undefined;
            address: any;
            canUseRelay: boolean;
        } | null | undefined;
        stats: {
            __typename?: "ProfileStats" | undefined;
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
        };
        followModule?: {
            __typename?: "FeeFollowModuleSettings" | undefined;
            type: FollowModules;
            recipient: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename?: "ProfileFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
        } | {
            __typename?: "RevertFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
        } | {
            __typename?: "UnknownFollowModuleSettings" | undefined;
            type: FollowModules;
            contractAddress: any;
            followModuleReturnData: any;
        } | null | undefined;
        onChainIdentity: {
            __typename?: "OnChainIdentity" | undefined;
            proofOfHumanity: boolean;
            ens?: {
                __typename?: "EnsOnChainIdentity" | undefined;
                name?: any;
            } | null | undefined;
            sybilDotOrg: {
                __typename?: "SybilDotOrgIdentity" | undefined;
                verified: boolean;
                source: {
                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                    twitter: {
                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                        handle?: string | null | undefined;
                    };
                };
            };
            worldcoin: {
                __typename?: "WorldcoinIdentity" | undefined;
                isHuman: boolean;
            };
        };
    }[] | undefined;
    loading: boolean;
    error: Apollo.ApolloError | undefined;
};

declare function usePublication(publicationId: string): {
    publication: {
        __typename: "Comment";
        id: any;
        createdAt: any;
        appId?: any;
        hidden: boolean;
        reaction?: ReactionTypes | null | undefined;
        mirrors: any[];
        hasCollectedByMe: boolean;
        mainPost: {
            __typename?: "Mirror" | undefined;
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            hasCollectedByMe: boolean;
            mirrorOf: {
                __typename?: "Comment" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                mainPost: {
                    __typename?: "Mirror" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    hasCollectedByMe: boolean;
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                } | {
                    __typename?: "Post" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                };
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            } | {
                __typename?: "Post" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            };
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        } | {
            __typename?: "Post" | undefined;
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            mirrors: any[];
            hasCollectedByMe: boolean;
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        };
        profile: {
            __typename?: "Profile" | undefined;
            id: any;
            name?: string | null | undefined;
            bio?: string | null | undefined;
            isFollowedByMe: boolean;
            isFollowing: boolean;
            followNftAddress?: any;
            metadata?: any;
            isDefault: boolean;
            handle: any;
            ownedBy: any;
            attributes?: {
                __typename?: "Attribute" | undefined;
                displayType?: string | null | undefined;
                traitType?: string | null | undefined;
                key: string;
                value: string;
            }[] | null | undefined;
            picture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            coverPicture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            dispatcher?: {
                __typename?: "Dispatcher" | undefined;
                address: any;
                canUseRelay: boolean;
            } | null | undefined;
            stats: {
                __typename?: "ProfileStats" | undefined;
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
            };
            followModule?: {
                __typename?: "FeeFollowModuleSettings" | undefined;
                type: FollowModules;
                recipient: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename?: "ProfileFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "RevertFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
                followModuleReturnData: any;
            } | null | undefined;
            onChainIdentity: {
                __typename?: "OnChainIdentity" | undefined;
                proofOfHumanity: boolean;
                ens?: {
                    __typename?: "EnsOnChainIdentity" | undefined;
                    name?: any;
                } | null | undefined;
                sybilDotOrg: {
                    __typename?: "SybilDotOrgIdentity" | undefined;
                    verified: boolean;
                    source: {
                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                        twitter: {
                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                            handle?: string | null | undefined;
                        };
                    };
                };
                worldcoin: {
                    __typename?: "WorldcoinIdentity" | undefined;
                    isHuman: boolean;
                };
            };
        };
        stats: {
            __typename?: "PublicationStats" | undefined;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
        };
        metadata: {
            __typename?: "MetadataOutput" | undefined;
            name?: string | null | undefined;
            description?: any;
            content?: any;
            media: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            }[];
            attributes: {
                __typename?: "MetadataAttributeOutput" | undefined;
                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                traitType?: string | null | undefined;
                value?: string | null | undefined;
            }[];
        };
        collectModule: {
            __typename: "FeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "FreeCollectModuleSettings";
            type: CollectModules;
            followerOnly: boolean;
            contractAddress: any;
        } | {
            __typename: "LimitedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "LimitedTimedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "RevertCollectModuleSettings";
            type: CollectModules;
        } | {
            __typename: "TimedFeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "UnknownCollectModuleSettings";
            type: CollectModules;
            contractAddress: any;
            collectModuleReturnData: any;
        };
        referenceModule?: {
            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            commentsRestricted: boolean;
            mirrorsRestricted: boolean;
            degreesOfSeparation: number;
        } | {
            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
        } | {
            __typename?: "UnknownReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            referenceModuleReturnData: any;
        } | null | undefined;
    } | {
        __typename: "Mirror";
        id: any;
        createdAt: any;
        appId?: any;
        hidden: boolean;
        reaction?: ReactionTypes | null | undefined;
        hasCollectedByMe: boolean;
        mirrorOf: {
            __typename?: "Comment" | undefined;
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            mirrors: any[];
            hasCollectedByMe: boolean;
            mainPost: {
                __typename?: "Mirror" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                hasCollectedByMe: boolean;
                mirrorOf: {
                    __typename?: "Comment" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    mainPost: {
                        __typename?: "Mirror" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        hasCollectedByMe: boolean;
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    } | {
                        __typename?: "Post" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        mirrors: any[];
                        hasCollectedByMe: boolean;
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    };
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                } | {
                    __typename?: "Post" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                };
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            } | {
                __typename?: "Post" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            };
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        } | {
            __typename?: "Post" | undefined;
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            mirrors: any[];
            hasCollectedByMe: boolean;
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        };
        profile: {
            __typename?: "Profile" | undefined;
            id: any;
            name?: string | null | undefined;
            bio?: string | null | undefined;
            isFollowedByMe: boolean;
            isFollowing: boolean;
            followNftAddress?: any;
            metadata?: any;
            isDefault: boolean;
            handle: any;
            ownedBy: any;
            attributes?: {
                __typename?: "Attribute" | undefined;
                displayType?: string | null | undefined;
                traitType?: string | null | undefined;
                key: string;
                value: string;
            }[] | null | undefined;
            picture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            coverPicture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            dispatcher?: {
                __typename?: "Dispatcher" | undefined;
                address: any;
                canUseRelay: boolean;
            } | null | undefined;
            stats: {
                __typename?: "ProfileStats" | undefined;
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
            };
            followModule?: {
                __typename?: "FeeFollowModuleSettings" | undefined;
                type: FollowModules;
                recipient: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename?: "ProfileFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "RevertFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
                followModuleReturnData: any;
            } | null | undefined;
            onChainIdentity: {
                __typename?: "OnChainIdentity" | undefined;
                proofOfHumanity: boolean;
                ens?: {
                    __typename?: "EnsOnChainIdentity" | undefined;
                    name?: any;
                } | null | undefined;
                sybilDotOrg: {
                    __typename?: "SybilDotOrgIdentity" | undefined;
                    verified: boolean;
                    source: {
                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                        twitter: {
                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                            handle?: string | null | undefined;
                        };
                    };
                };
                worldcoin: {
                    __typename?: "WorldcoinIdentity" | undefined;
                    isHuman: boolean;
                };
            };
        };
        stats: {
            __typename?: "PublicationStats" | undefined;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
        };
        metadata: {
            __typename?: "MetadataOutput" | undefined;
            name?: string | null | undefined;
            description?: any;
            content?: any;
            media: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            }[];
            attributes: {
                __typename?: "MetadataAttributeOutput" | undefined;
                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                traitType?: string | null | undefined;
                value?: string | null | undefined;
            }[];
        };
        collectModule: {
            __typename: "FeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "FreeCollectModuleSettings";
            type: CollectModules;
            followerOnly: boolean;
            contractAddress: any;
        } | {
            __typename: "LimitedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "LimitedTimedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "RevertCollectModuleSettings";
            type: CollectModules;
        } | {
            __typename: "TimedFeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "UnknownCollectModuleSettings";
            type: CollectModules;
            contractAddress: any;
            collectModuleReturnData: any;
        };
        referenceModule?: {
            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            commentsRestricted: boolean;
            mirrorsRestricted: boolean;
            degreesOfSeparation: number;
        } | {
            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
        } | {
            __typename?: "UnknownReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            referenceModuleReturnData: any;
        } | null | undefined;
    } | {
        __typename: "Post";
        id: any;
        createdAt: any;
        appId?: any;
        hidden: boolean;
        reaction?: ReactionTypes | null | undefined;
        mirrors: any[];
        hasCollectedByMe: boolean;
        profile: {
            __typename?: "Profile" | undefined;
            id: any;
            name?: string | null | undefined;
            bio?: string | null | undefined;
            isFollowedByMe: boolean;
            isFollowing: boolean;
            followNftAddress?: any;
            metadata?: any;
            isDefault: boolean;
            handle: any;
            ownedBy: any;
            attributes?: {
                __typename?: "Attribute" | undefined;
                displayType?: string | null | undefined;
                traitType?: string | null | undefined;
                key: string;
                value: string;
            }[] | null | undefined;
            picture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            coverPicture?: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            } | {
                __typename?: "NftImage" | undefined;
                contractAddress: any;
                tokenId: string;
                uri: any;
                verified: boolean;
            } | null | undefined;
            dispatcher?: {
                __typename?: "Dispatcher" | undefined;
                address: any;
                canUseRelay: boolean;
            } | null | undefined;
            stats: {
                __typename?: "ProfileStats" | undefined;
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
            };
            followModule?: {
                __typename?: "FeeFollowModuleSettings" | undefined;
                type: FollowModules;
                recipient: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename?: "ProfileFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "RevertFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownFollowModuleSettings" | undefined;
                type: FollowModules;
                contractAddress: any;
                followModuleReturnData: any;
            } | null | undefined;
            onChainIdentity: {
                __typename?: "OnChainIdentity" | undefined;
                proofOfHumanity: boolean;
                ens?: {
                    __typename?: "EnsOnChainIdentity" | undefined;
                    name?: any;
                } | null | undefined;
                sybilDotOrg: {
                    __typename?: "SybilDotOrgIdentity" | undefined;
                    verified: boolean;
                    source: {
                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                        twitter: {
                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                            handle?: string | null | undefined;
                        };
                    };
                };
                worldcoin: {
                    __typename?: "WorldcoinIdentity" | undefined;
                    isHuman: boolean;
                };
            };
        };
        stats: {
            __typename?: "PublicationStats" | undefined;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
        };
        metadata: {
            __typename?: "MetadataOutput" | undefined;
            name?: string | null | undefined;
            description?: any;
            content?: any;
            media: {
                __typename?: "MediaSet" | undefined;
                original: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                };
                small?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
                medium?: {
                    __typename?: "Media" | undefined;
                    url: any;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    mimeType?: any;
                } | null | undefined;
            }[];
            attributes: {
                __typename?: "MetadataAttributeOutput" | undefined;
                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                traitType?: string | null | undefined;
                value?: string | null | undefined;
            }[];
        };
        collectModule: {
            __typename: "FeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "FreeCollectModuleSettings";
            type: CollectModules;
            followerOnly: boolean;
            contractAddress: any;
        } | {
            __typename: "LimitedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "LimitedTimedFeeCollectModuleSettings";
            type: CollectModules;
            collectLimit: string;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "RevertCollectModuleSettings";
            type: CollectModules;
        } | {
            __typename: "TimedFeeCollectModuleSettings";
            type: CollectModules;
            recipient: any;
            referralFee: number;
            endTimestamp: any;
            amount: {
                __typename?: "ModuleFeeAmount" | undefined;
                value: string;
                asset: {
                    __typename?: "Erc20" | undefined;
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                };
            };
        } | {
            __typename: "UnknownCollectModuleSettings";
            type: CollectModules;
            contractAddress: any;
            collectModuleReturnData: any;
        };
        referenceModule?: {
            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            commentsRestricted: boolean;
            mirrorsRestricted: boolean;
            degreesOfSeparation: number;
        } | {
            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
        } | {
            __typename?: "UnknownReferenceModuleSettings" | undefined;
            type: ReferenceModules;
            contractAddress: any;
            referenceModuleReturnData: any;
        } | null | undefined;
    } | null | undefined;
    loading: boolean;
    error: Apollo.ApolloError | undefined;
};

declare function usePublications(profileId: string, publicationTypes: Array<PublicationTypes>): {
    publications: {
        __typename?: "PaginatedPublicationResult" | undefined;
        items: ({
            __typename: "Comment";
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            mirrors: any[];
            hasCollectedByMe: boolean;
            mainPost: {
                __typename?: "Mirror" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                hasCollectedByMe: boolean;
                mirrorOf: {
                    __typename?: "Comment" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    mainPost: {
                        __typename?: "Mirror" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        hasCollectedByMe: boolean;
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    } | {
                        __typename?: "Post" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        mirrors: any[];
                        hasCollectedByMe: boolean;
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    };
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                } | {
                    __typename?: "Post" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                };
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            } | {
                __typename?: "Post" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            };
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        } | {
            __typename: "Mirror";
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            hasCollectedByMe: boolean;
            mirrorOf: {
                __typename?: "Comment" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                mainPost: {
                    __typename?: "Mirror" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    hasCollectedByMe: boolean;
                    mirrorOf: {
                        __typename?: "Comment" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        mirrors: any[];
                        hasCollectedByMe: boolean;
                        mainPost: {
                            __typename?: "Mirror" | undefined;
                            id: any;
                            createdAt: any;
                            appId?: any;
                            hidden: boolean;
                            reaction?: ReactionTypes | null | undefined;
                            hasCollectedByMe: boolean;
                            profile: {
                                __typename?: "Profile" | undefined;
                                id: any;
                                name?: string | null | undefined;
                                bio?: string | null | undefined;
                                isFollowedByMe: boolean;
                                isFollowing: boolean;
                                followNftAddress?: any;
                                metadata?: any;
                                isDefault: boolean;
                                handle: any;
                                ownedBy: any;
                                attributes?: {
                                    __typename?: "Attribute" | undefined;
                                    displayType?: string | null | undefined;
                                    traitType?: string | null | undefined;
                                    key: string;
                                    value: string;
                                }[] | null | undefined;
                                picture?: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                } | {
                                    __typename?: "NftImage" | undefined;
                                    contractAddress: any;
                                    tokenId: string;
                                    uri: any;
                                    verified: boolean;
                                } | null | undefined;
                                coverPicture?: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                } | {
                                    __typename?: "NftImage" | undefined;
                                    contractAddress: any;
                                    tokenId: string;
                                    uri: any;
                                    verified: boolean;
                                } | null | undefined;
                                dispatcher?: {
                                    __typename?: "Dispatcher" | undefined;
                                    address: any;
                                    canUseRelay: boolean;
                                } | null | undefined;
                                stats: {
                                    __typename?: "ProfileStats" | undefined;
                                    totalFollowers: number;
                                    totalFollowing: number;
                                    totalPosts: number;
                                    totalComments: number;
                                    totalMirrors: number;
                                    totalPublications: number;
                                    totalCollects: number;
                                };
                                followModule?: {
                                    __typename?: "FeeFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    recipient: any;
                                    amount: {
                                        __typename?: "ModuleFeeAmount" | undefined;
                                        value: string;
                                        asset: {
                                            __typename?: "Erc20" | undefined;
                                            name: string;
                                            symbol: string;
                                            decimals: number;
                                            address: any;
                                        };
                                    };
                                } | {
                                    __typename?: "ProfileFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                } | {
                                    __typename?: "RevertFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                } | {
                                    __typename?: "UnknownFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                    followModuleReturnData: any;
                                } | null | undefined;
                                onChainIdentity: {
                                    __typename?: "OnChainIdentity" | undefined;
                                    proofOfHumanity: boolean;
                                    ens?: {
                                        __typename?: "EnsOnChainIdentity" | undefined;
                                        name?: any;
                                    } | null | undefined;
                                    sybilDotOrg: {
                                        __typename?: "SybilDotOrgIdentity" | undefined;
                                        verified: boolean;
                                        source: {
                                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                                            twitter: {
                                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                                handle?: string | null | undefined;
                                            };
                                        };
                                    };
                                    worldcoin: {
                                        __typename?: "WorldcoinIdentity" | undefined;
                                        isHuman: boolean;
                                    };
                                };
                            };
                            stats: {
                                __typename?: "PublicationStats" | undefined;
                                totalAmountOfMirrors: number;
                                totalAmountOfCollects: number;
                                totalAmountOfComments: number;
                            };
                            metadata: {
                                __typename?: "MetadataOutput" | undefined;
                                name?: string | null | undefined;
                                description?: any;
                                content?: any;
                                media: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                }[];
                                attributes: {
                                    __typename?: "MetadataAttributeOutput" | undefined;
                                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                    traitType?: string | null | undefined;
                                    value?: string | null | undefined;
                                }[];
                            };
                            collectModule: {
                                __typename: "FeeCollectModuleSettings";
                                type: CollectModules;
                                recipient: any;
                                referralFee: number;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "FreeCollectModuleSettings";
                                type: CollectModules;
                                followerOnly: boolean;
                                contractAddress: any;
                            } | {
                                __typename: "LimitedFeeCollectModuleSettings";
                                type: CollectModules;
                                collectLimit: string;
                                recipient: any;
                                referralFee: number;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "LimitedTimedFeeCollectModuleSettings";
                                type: CollectModules;
                                collectLimit: string;
                                recipient: any;
                                referralFee: number;
                                endTimestamp: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "RevertCollectModuleSettings";
                                type: CollectModules;
                            } | {
                                __typename: "TimedFeeCollectModuleSettings";
                                type: CollectModules;
                                recipient: any;
                                referralFee: number;
                                endTimestamp: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "UnknownCollectModuleSettings";
                                type: CollectModules;
                                contractAddress: any;
                                collectModuleReturnData: any;
                            };
                            referenceModule?: {
                                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                                commentsRestricted: boolean;
                                mirrorsRestricted: boolean;
                                degreesOfSeparation: number;
                            } | {
                                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                                referenceModuleReturnData: any;
                            } | null | undefined;
                        } | {
                            __typename?: "Post" | undefined;
                            id: any;
                            createdAt: any;
                            appId?: any;
                            hidden: boolean;
                            reaction?: ReactionTypes | null | undefined;
                            mirrors: any[];
                            hasCollectedByMe: boolean;
                            profile: {
                                __typename?: "Profile" | undefined;
                                id: any;
                                name?: string | null | undefined;
                                bio?: string | null | undefined;
                                isFollowedByMe: boolean;
                                isFollowing: boolean;
                                followNftAddress?: any;
                                metadata?: any;
                                isDefault: boolean;
                                handle: any;
                                ownedBy: any;
                                attributes?: {
                                    __typename?: "Attribute" | undefined;
                                    displayType?: string | null | undefined;
                                    traitType?: string | null | undefined;
                                    key: string;
                                    value: string;
                                }[] | null | undefined;
                                picture?: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                } | {
                                    __typename?: "NftImage" | undefined;
                                    contractAddress: any;
                                    tokenId: string;
                                    uri: any;
                                    verified: boolean;
                                } | null | undefined;
                                coverPicture?: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                } | {
                                    __typename?: "NftImage" | undefined;
                                    contractAddress: any;
                                    tokenId: string;
                                    uri: any;
                                    verified: boolean;
                                } | null | undefined;
                                dispatcher?: {
                                    __typename?: "Dispatcher" | undefined;
                                    address: any;
                                    canUseRelay: boolean;
                                } | null | undefined;
                                stats: {
                                    __typename?: "ProfileStats" | undefined;
                                    totalFollowers: number;
                                    totalFollowing: number;
                                    totalPosts: number;
                                    totalComments: number;
                                    totalMirrors: number;
                                    totalPublications: number;
                                    totalCollects: number;
                                };
                                followModule?: {
                                    __typename?: "FeeFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    recipient: any;
                                    amount: {
                                        __typename?: "ModuleFeeAmount" | undefined;
                                        value: string;
                                        asset: {
                                            __typename?: "Erc20" | undefined;
                                            name: string;
                                            symbol: string;
                                            decimals: number;
                                            address: any;
                                        };
                                    };
                                } | {
                                    __typename?: "ProfileFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                } | {
                                    __typename?: "RevertFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                } | {
                                    __typename?: "UnknownFollowModuleSettings" | undefined;
                                    type: FollowModules;
                                    contractAddress: any;
                                    followModuleReturnData: any;
                                } | null | undefined;
                                onChainIdentity: {
                                    __typename?: "OnChainIdentity" | undefined;
                                    proofOfHumanity: boolean;
                                    ens?: {
                                        __typename?: "EnsOnChainIdentity" | undefined;
                                        name?: any;
                                    } | null | undefined;
                                    sybilDotOrg: {
                                        __typename?: "SybilDotOrgIdentity" | undefined;
                                        verified: boolean;
                                        source: {
                                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                                            twitter: {
                                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                                handle?: string | null | undefined;
                                            };
                                        };
                                    };
                                    worldcoin: {
                                        __typename?: "WorldcoinIdentity" | undefined;
                                        isHuman: boolean;
                                    };
                                };
                            };
                            stats: {
                                __typename?: "PublicationStats" | undefined;
                                totalAmountOfMirrors: number;
                                totalAmountOfCollects: number;
                                totalAmountOfComments: number;
                            };
                            metadata: {
                                __typename?: "MetadataOutput" | undefined;
                                name?: string | null | undefined;
                                description?: any;
                                content?: any;
                                media: {
                                    __typename?: "MediaSet" | undefined;
                                    original: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    };
                                    small?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                    medium?: {
                                        __typename?: "Media" | undefined;
                                        url: any;
                                        width?: number | null | undefined;
                                        height?: number | null | undefined;
                                        mimeType?: any;
                                    } | null | undefined;
                                }[];
                                attributes: {
                                    __typename?: "MetadataAttributeOutput" | undefined;
                                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                    traitType?: string | null | undefined;
                                    value?: string | null | undefined;
                                }[];
                            };
                            collectModule: {
                                __typename: "FeeCollectModuleSettings";
                                type: CollectModules;
                                recipient: any;
                                referralFee: number;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "FreeCollectModuleSettings";
                                type: CollectModules;
                                followerOnly: boolean;
                                contractAddress: any;
                            } | {
                                __typename: "LimitedFeeCollectModuleSettings";
                                type: CollectModules;
                                collectLimit: string;
                                recipient: any;
                                referralFee: number;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "LimitedTimedFeeCollectModuleSettings";
                                type: CollectModules;
                                collectLimit: string;
                                recipient: any;
                                referralFee: number;
                                endTimestamp: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "RevertCollectModuleSettings";
                                type: CollectModules;
                            } | {
                                __typename: "TimedFeeCollectModuleSettings";
                                type: CollectModules;
                                recipient: any;
                                referralFee: number;
                                endTimestamp: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename: "UnknownCollectModuleSettings";
                                type: CollectModules;
                                contractAddress: any;
                                collectModuleReturnData: any;
                            };
                            referenceModule?: {
                                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                                commentsRestricted: boolean;
                                mirrorsRestricted: boolean;
                                degreesOfSeparation: number;
                            } | {
                                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownReferenceModuleSettings" | undefined;
                                type: ReferenceModules;
                                contractAddress: any;
                                referenceModuleReturnData: any;
                            } | null | undefined;
                        };
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    } | {
                        __typename?: "Post" | undefined;
                        id: any;
                        createdAt: any;
                        appId?: any;
                        hidden: boolean;
                        reaction?: ReactionTypes | null | undefined;
                        mirrors: any[];
                        hasCollectedByMe: boolean;
                        profile: {
                            __typename?: "Profile" | undefined;
                            id: any;
                            name?: string | null | undefined;
                            bio?: string | null | undefined;
                            isFollowedByMe: boolean;
                            isFollowing: boolean;
                            followNftAddress?: any;
                            metadata?: any;
                            isDefault: boolean;
                            handle: any;
                            ownedBy: any;
                            attributes?: {
                                __typename?: "Attribute" | undefined;
                                displayType?: string | null | undefined;
                                traitType?: string | null | undefined;
                                key: string;
                                value: string;
                            }[] | null | undefined;
                            picture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            coverPicture?: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            } | {
                                __typename?: "NftImage" | undefined;
                                contractAddress: any;
                                tokenId: string;
                                uri: any;
                                verified: boolean;
                            } | null | undefined;
                            dispatcher?: {
                                __typename?: "Dispatcher" | undefined;
                                address: any;
                                canUseRelay: boolean;
                            } | null | undefined;
                            stats: {
                                __typename?: "ProfileStats" | undefined;
                                totalFollowers: number;
                                totalFollowing: number;
                                totalPosts: number;
                                totalComments: number;
                                totalMirrors: number;
                                totalPublications: number;
                                totalCollects: number;
                            };
                            followModule?: {
                                __typename?: "FeeFollowModuleSettings" | undefined;
                                type: FollowModules;
                                recipient: any;
                                amount: {
                                    __typename?: "ModuleFeeAmount" | undefined;
                                    value: string;
                                    asset: {
                                        __typename?: "Erc20" | undefined;
                                        name: string;
                                        symbol: string;
                                        decimals: number;
                                        address: any;
                                    };
                                };
                            } | {
                                __typename?: "ProfileFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "RevertFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                            } | {
                                __typename?: "UnknownFollowModuleSettings" | undefined;
                                type: FollowModules;
                                contractAddress: any;
                                followModuleReturnData: any;
                            } | null | undefined;
                            onChainIdentity: {
                                __typename?: "OnChainIdentity" | undefined;
                                proofOfHumanity: boolean;
                                ens?: {
                                    __typename?: "EnsOnChainIdentity" | undefined;
                                    name?: any;
                                } | null | undefined;
                                sybilDotOrg: {
                                    __typename?: "SybilDotOrgIdentity" | undefined;
                                    verified: boolean;
                                    source: {
                                        __typename?: "SybilDotOrgIdentitySource" | undefined;
                                        twitter: {
                                            __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                            handle?: string | null | undefined;
                                        };
                                    };
                                };
                                worldcoin: {
                                    __typename?: "WorldcoinIdentity" | undefined;
                                    isHuman: boolean;
                                };
                            };
                        };
                        stats: {
                            __typename?: "PublicationStats" | undefined;
                            totalAmountOfMirrors: number;
                            totalAmountOfCollects: number;
                            totalAmountOfComments: number;
                        };
                        metadata: {
                            __typename?: "MetadataOutput" | undefined;
                            name?: string | null | undefined;
                            description?: any;
                            content?: any;
                            media: {
                                __typename?: "MediaSet" | undefined;
                                original: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                };
                                small?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                                medium?: {
                                    __typename?: "Media" | undefined;
                                    url: any;
                                    width?: number | null | undefined;
                                    height?: number | null | undefined;
                                    mimeType?: any;
                                } | null | undefined;
                            }[];
                            attributes: {
                                __typename?: "MetadataAttributeOutput" | undefined;
                                displayType?: PublicationMetadataDisplayTypes | null | undefined;
                                traitType?: string | null | undefined;
                                value?: string | null | undefined;
                            }[];
                        };
                        collectModule: {
                            __typename: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "FreeCollectModuleSettings";
                            type: CollectModules;
                            followerOnly: boolean;
                            contractAddress: any;
                        } | {
                            __typename: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "RevertCollectModuleSettings";
                            type: CollectModules;
                        } | {
                            __typename: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            endTimestamp: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename: "UnknownCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            collectModuleReturnData: any;
                        };
                        referenceModule?: {
                            __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            commentsRestricted: boolean;
                            mirrorsRestricted: boolean;
                            degreesOfSeparation: number;
                        } | {
                            __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownReferenceModuleSettings" | undefined;
                            type: ReferenceModules;
                            contractAddress: any;
                            referenceModuleReturnData: any;
                        } | null | undefined;
                    };
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                } | {
                    __typename?: "Post" | undefined;
                    id: any;
                    createdAt: any;
                    appId?: any;
                    hidden: boolean;
                    reaction?: ReactionTypes | null | undefined;
                    mirrors: any[];
                    hasCollectedByMe: boolean;
                    profile: {
                        __typename?: "Profile" | undefined;
                        id: any;
                        name?: string | null | undefined;
                        bio?: string | null | undefined;
                        isFollowedByMe: boolean;
                        isFollowing: boolean;
                        followNftAddress?: any;
                        metadata?: any;
                        isDefault: boolean;
                        handle: any;
                        ownedBy: any;
                        attributes?: {
                            __typename?: "Attribute" | undefined;
                            displayType?: string | null | undefined;
                            traitType?: string | null | undefined;
                            key: string;
                            value: string;
                        }[] | null | undefined;
                        picture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        coverPicture?: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        } | {
                            __typename?: "NftImage" | undefined;
                            contractAddress: any;
                            tokenId: string;
                            uri: any;
                            verified: boolean;
                        } | null | undefined;
                        dispatcher?: {
                            __typename?: "Dispatcher" | undefined;
                            address: any;
                            canUseRelay: boolean;
                        } | null | undefined;
                        stats: {
                            __typename?: "ProfileStats" | undefined;
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                        };
                        followModule?: {
                            __typename?: "FeeFollowModuleSettings" | undefined;
                            type: FollowModules;
                            recipient: any;
                            amount: {
                                __typename?: "ModuleFeeAmount" | undefined;
                                value: string;
                                asset: {
                                    __typename?: "Erc20" | undefined;
                                    name: string;
                                    symbol: string;
                                    decimals: number;
                                    address: any;
                                };
                            };
                        } | {
                            __typename?: "ProfileFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "RevertFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                        } | {
                            __typename?: "UnknownFollowModuleSettings" | undefined;
                            type: FollowModules;
                            contractAddress: any;
                            followModuleReturnData: any;
                        } | null | undefined;
                        onChainIdentity: {
                            __typename?: "OnChainIdentity" | undefined;
                            proofOfHumanity: boolean;
                            ens?: {
                                __typename?: "EnsOnChainIdentity" | undefined;
                                name?: any;
                            } | null | undefined;
                            sybilDotOrg: {
                                __typename?: "SybilDotOrgIdentity" | undefined;
                                verified: boolean;
                                source: {
                                    __typename?: "SybilDotOrgIdentitySource" | undefined;
                                    twitter: {
                                        __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                        handle?: string | null | undefined;
                                    };
                                };
                            };
                            worldcoin: {
                                __typename?: "WorldcoinIdentity" | undefined;
                                isHuman: boolean;
                            };
                        };
                    };
                    stats: {
                        __typename?: "PublicationStats" | undefined;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                    };
                    metadata: {
                        __typename?: "MetadataOutput" | undefined;
                        name?: string | null | undefined;
                        description?: any;
                        content?: any;
                        media: {
                            __typename?: "MediaSet" | undefined;
                            original: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            };
                            small?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                            medium?: {
                                __typename?: "Media" | undefined;
                                url: any;
                                width?: number | null | undefined;
                                height?: number | null | undefined;
                                mimeType?: any;
                            } | null | undefined;
                        }[];
                        attributes: {
                            __typename?: "MetadataAttributeOutput" | undefined;
                            displayType?: PublicationMetadataDisplayTypes | null | undefined;
                            traitType?: string | null | undefined;
                            value?: string | null | undefined;
                        }[];
                    };
                    collectModule: {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                    } | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                    } | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                    };
                    referenceModule?: {
                        __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        commentsRestricted: boolean;
                        mirrorsRestricted: boolean;
                        degreesOfSeparation: number;
                    } | {
                        __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownReferenceModuleSettings" | undefined;
                        type: ReferenceModules;
                        contractAddress: any;
                        referenceModuleReturnData: any;
                    } | null | undefined;
                };
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            } | {
                __typename?: "Post" | undefined;
                id: any;
                createdAt: any;
                appId?: any;
                hidden: boolean;
                reaction?: ReactionTypes | null | undefined;
                mirrors: any[];
                hasCollectedByMe: boolean;
                profile: {
                    __typename?: "Profile" | undefined;
                    id: any;
                    name?: string | null | undefined;
                    bio?: string | null | undefined;
                    isFollowedByMe: boolean;
                    isFollowing: boolean;
                    followNftAddress?: any;
                    metadata?: any;
                    isDefault: boolean;
                    handle: any;
                    ownedBy: any;
                    attributes?: {
                        __typename?: "Attribute" | undefined;
                        displayType?: string | null | undefined;
                        traitType?: string | null | undefined;
                        key: string;
                        value: string;
                    }[] | null | undefined;
                    picture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    coverPicture?: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    } | {
                        __typename?: "NftImage" | undefined;
                        contractAddress: any;
                        tokenId: string;
                        uri: any;
                        verified: boolean;
                    } | null | undefined;
                    dispatcher?: {
                        __typename?: "Dispatcher" | undefined;
                        address: any;
                        canUseRelay: boolean;
                    } | null | undefined;
                    stats: {
                        __typename?: "ProfileStats" | undefined;
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                    };
                    followModule?: {
                        __typename?: "FeeFollowModuleSettings" | undefined;
                        type: FollowModules;
                        recipient: any;
                        amount: {
                            __typename?: "ModuleFeeAmount" | undefined;
                            value: string;
                            asset: {
                                __typename?: "Erc20" | undefined;
                                name: string;
                                symbol: string;
                                decimals: number;
                                address: any;
                            };
                        };
                    } | {
                        __typename?: "ProfileFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "RevertFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                    } | {
                        __typename?: "UnknownFollowModuleSettings" | undefined;
                        type: FollowModules;
                        contractAddress: any;
                        followModuleReturnData: any;
                    } | null | undefined;
                    onChainIdentity: {
                        __typename?: "OnChainIdentity" | undefined;
                        proofOfHumanity: boolean;
                        ens?: {
                            __typename?: "EnsOnChainIdentity" | undefined;
                            name?: any;
                        } | null | undefined;
                        sybilDotOrg: {
                            __typename?: "SybilDotOrgIdentity" | undefined;
                            verified: boolean;
                            source: {
                                __typename?: "SybilDotOrgIdentitySource" | undefined;
                                twitter: {
                                    __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                    handle?: string | null | undefined;
                                };
                            };
                        };
                        worldcoin: {
                            __typename?: "WorldcoinIdentity" | undefined;
                            isHuman: boolean;
                        };
                    };
                };
                stats: {
                    __typename?: "PublicationStats" | undefined;
                    totalAmountOfMirrors: number;
                    totalAmountOfCollects: number;
                    totalAmountOfComments: number;
                };
                metadata: {
                    __typename?: "MetadataOutput" | undefined;
                    name?: string | null | undefined;
                    description?: any;
                    content?: any;
                    media: {
                        __typename?: "MediaSet" | undefined;
                        original: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        };
                        small?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                        medium?: {
                            __typename?: "Media" | undefined;
                            url: any;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            mimeType?: any;
                        } | null | undefined;
                    }[];
                    attributes: {
                        __typename?: "MetadataAttributeOutput" | undefined;
                        displayType?: PublicationMetadataDisplayTypes | null | undefined;
                        traitType?: string | null | undefined;
                        value?: string | null | undefined;
                    }[];
                };
                collectModule: {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                } | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                } | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                };
                referenceModule?: {
                    __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    commentsRestricted: boolean;
                    mirrorsRestricted: boolean;
                    degreesOfSeparation: number;
                } | {
                    __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownReferenceModuleSettings" | undefined;
                    type: ReferenceModules;
                    contractAddress: any;
                    referenceModuleReturnData: any;
                } | null | undefined;
            };
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        } | {
            __typename: "Post";
            id: any;
            createdAt: any;
            appId?: any;
            hidden: boolean;
            reaction?: ReactionTypes | null | undefined;
            mirrors: any[];
            hasCollectedByMe: boolean;
            profile: {
                __typename?: "Profile" | undefined;
                id: any;
                name?: string | null | undefined;
                bio?: string | null | undefined;
                isFollowedByMe: boolean;
                isFollowing: boolean;
                followNftAddress?: any;
                metadata?: any;
                isDefault: boolean;
                handle: any;
                ownedBy: any;
                attributes?: {
                    __typename?: "Attribute" | undefined;
                    displayType?: string | null | undefined;
                    traitType?: string | null | undefined;
                    key: string;
                    value: string;
                }[] | null | undefined;
                picture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                coverPicture?: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                } | {
                    __typename?: "NftImage" | undefined;
                    contractAddress: any;
                    tokenId: string;
                    uri: any;
                    verified: boolean;
                } | null | undefined;
                dispatcher?: {
                    __typename?: "Dispatcher" | undefined;
                    address: any;
                    canUseRelay: boolean;
                } | null | undefined;
                stats: {
                    __typename?: "ProfileStats" | undefined;
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                };
                followModule?: {
                    __typename?: "FeeFollowModuleSettings" | undefined;
                    type: FollowModules;
                    recipient: any;
                    amount: {
                        __typename?: "ModuleFeeAmount" | undefined;
                        value: string;
                        asset: {
                            __typename?: "Erc20" | undefined;
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                        };
                    };
                } | {
                    __typename?: "ProfileFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "RevertFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                } | {
                    __typename?: "UnknownFollowModuleSettings" | undefined;
                    type: FollowModules;
                    contractAddress: any;
                    followModuleReturnData: any;
                } | null | undefined;
                onChainIdentity: {
                    __typename?: "OnChainIdentity" | undefined;
                    proofOfHumanity: boolean;
                    ens?: {
                        __typename?: "EnsOnChainIdentity" | undefined;
                        name?: any;
                    } | null | undefined;
                    sybilDotOrg: {
                        __typename?: "SybilDotOrgIdentity" | undefined;
                        verified: boolean;
                        source: {
                            __typename?: "SybilDotOrgIdentitySource" | undefined;
                            twitter: {
                                __typename?: "SybilDotOrgTwitterIdentity" | undefined;
                                handle?: string | null | undefined;
                            };
                        };
                    };
                    worldcoin: {
                        __typename?: "WorldcoinIdentity" | undefined;
                        isHuman: boolean;
                    };
                };
            };
            stats: {
                __typename?: "PublicationStats" | undefined;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
            };
            metadata: {
                __typename?: "MetadataOutput" | undefined;
                name?: string | null | undefined;
                description?: any;
                content?: any;
                media: {
                    __typename?: "MediaSet" | undefined;
                    original: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    };
                    small?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                    medium?: {
                        __typename?: "Media" | undefined;
                        url: any;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        mimeType?: any;
                    } | null | undefined;
                }[];
                attributes: {
                    __typename?: "MetadataAttributeOutput" | undefined;
                    displayType?: PublicationMetadataDisplayTypes | null | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                }[];
            };
            collectModule: {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
            } | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
            } | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                    __typename?: "ModuleFeeAmount" | undefined;
                    value: string;
                    asset: {
                        __typename?: "Erc20" | undefined;
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                    };
                };
            } | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
            };
            referenceModule?: {
                __typename?: "DegreesOfSeparationReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                commentsRestricted: boolean;
                mirrorsRestricted: boolean;
                degreesOfSeparation: number;
            } | {
                __typename?: "FollowOnlyReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
            } | {
                __typename?: "UnknownReferenceModuleSettings" | undefined;
                type: ReferenceModules;
                contractAddress: any;
                referenceModuleReturnData: any;
            } | null | undefined;
        })[];
        pageInfo: {
            __typename?: "PaginatedResultInfo" | undefined;
            prev?: any;
            next?: any;
            totalCount?: number | null | undefined;
        };
    } | undefined;
    loading: boolean;
    error: Apollo.ApolloError | undefined;
};

interface AttributeData {
    displayType?: MetadataDisplayType;
    traitType?: string;
    value: string;
    key: string;
}
interface ProfileMetadata extends GenericMetadata {
    name?: string;
    bio?: string;
    cover_picture?: string;
    attributes: AttributeData[];
}

declare const useSetProfileMetadata: () => {
    setProfileMetadata: (profileId: string, metadata: ProfileMetadata) => Promise<void>;
    tx: any;
    loading: boolean;
    error: Error | null;
};

declare function useUnfollow(): {
    unfollow: (profileId: string) => Promise<void>;
    tx: any;
    loading: boolean;
    error: Error | null;
};

export { AttributeData, GenericMetadata, LensKitButton, LensKitProvider, LensKitProviderProps, Metadata, MetadataAttribute, MetadataDisplayType, ProfileMetadata, PublicationContentWarning, PublicationMainFocus, PublicationTypes, SignatureContext, useAuth, useCollect, useComment, useCreateProfile, useFollow, useIndexedTx, useMirror, usePost, useProfile, useProfiles, usePublication, usePublications, useSetProfileMetadata, useUnfollow };
